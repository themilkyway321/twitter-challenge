import { User, Tweet } from "@prisma/client";
import { useRouter } from "next/router";
import useSWR from "swr"
import useMutation from "../../lib/useMutataion";
import { cls } from "../../lib/utils";
import Link from "next/link";

interface TweetWithUser extends Tweet {
  user:User;
}

interface TweetDetailResponse {
  ok:boolean;
  tweet:TweetWithUser;
  isLiked:boolean;
}

export default function tweetContent(){
  const router = useRouter();
  const { data:userName} = useSWR("/api/users/me");
  const { data, mutate} = useSWR<TweetDetailResponse>(
    router.query.id ? `/api/tweet/${router.query.id}` : null
  );
  const [toggleFav]= useMutation(`/api/tweet/${router.query.id}/fav`);
  const onFavClick =()=>{
    if(!data)return;
    mutate((prev:any) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    toggleFav({});
  };
  return(
   <div>
     <Link href="/">
      <p className="text-gray-500 text-xl cursor-pointer px-3 py-5 hover:text-black">&larr; See all your tweets</p></Link>
      <div className="absolute top-[20%] left-[50%]  translate-x-[-50%]  bg-gray-50 w-[800px] border-2 rounded-lg p-4">
        <p className="text-xl">{userName?.name}'s Tweet</p>
        <p className="absolute bottom-0 right-2">Tweeted at {data?.tweet?.createAt.toString()}</p>
        <p className="p-4 my-5 bg-blue-100 rounded-lg">{data?.tweet?.description}</p>
        <button onClick={onFavClick} 
                className={cls("p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-blue-50 ", data?.isLiked ? "text-red-400 hover:text-red-500":"text-gray-400 hover:text-gray-500")}>
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill={data?.isLiked ? "currentColor":"none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="px-2">{data?.isLiked? "Like":"Unlike"}</span>
                </button>
      </div>
   </div>
  )
}

