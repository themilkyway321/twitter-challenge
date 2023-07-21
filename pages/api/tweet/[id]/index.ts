import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";
import client from "../../../../lib/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
  ) {

    const { 
      query:{id},
      session:{user}, 
     }= req;
     const tweet = await client.tweet.findUnique({
      where: {
        id:Number(id),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    const isLiked = Boolean(
      await client.fav.findFirst({
        where:{
          tweetId:tweet?.id,
          userId:user?.id
        },
        select:{
          id:true,
        },
      })
    );
    res.json({ ok: true, tweet, isLiked });
}
export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);