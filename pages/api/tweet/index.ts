import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../lib/withSession";
import withHandler, { ResponseType } from "../../../lib/withHandler";
import client from "../../../lib/client";

async function handler(
  req:NextApiRequest,
  res:NextApiResponse<ResponseType>
) {
  if(req.method === "GET"){
    const tweets = await client.tweet.findMany({
      include:{
        _count:{
          select:{
            favs:true,
          },
        },
      },
    })
    res.json({
      ok:true,
      tweets,
    })
  }



  if(req.method === "POST"){
    const {
      body: { description,createAt },
      session: { user },
    } = req;
    const tweet = await client.tweet.create({
      data:{
        description,
        createAt,
        user:{
          connect:{
            id:user?.id,
          },
        },
      }
    });
    res.json({
      ok:true,
      tweet,
    })
  }
  return res.status(405).end();
}

export default withApiSession(
  withHandler({
  methods:["GET","POST"],
  handler,
})
);