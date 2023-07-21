import { Tweet } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";

interface TweetWithCount extends Tweet {
  _count:{
    favs:number;
  }
}

interface TweetsResponse {
  ok:boolean;
 tweets:TweetWithCount[];
}

export default () => {
  const router = useRouter();
  const { data, error } = useSWR("/api/users/me");
  const {data:tweetData}=useSWR<TweetsResponse>("/api/tweet");
  
  useEffect(() => {
    if (error) {
      router.replace("/create-account");
    }
  }, [router, error]);
  if (!data) {
    return <div />;
  };

  return (
    <div className="m-auto w-[800px] relative">
      <div className=" w-[100%] flex justify-between mt-5">
        <h1 className="my-4 text-2xl font-bold flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>Hello, {data?.name}!</h1>
          <Link href="/tweet" className="">
            <span className="cursor-pointer bg-[#119ffb] text-lg px-16 py-2 rounded-3xl text-white font-bold my-4 hover:bg-blue-500">Tweet</span>
          </Link>
      </div>
      <h3 className="text-lg font-semibold">Tweets</h3> 
      {tweetData?.tweets?.map((v)=>(
        <Link href={`/tweet/${v.id}`}>
        <div 
        key={v.id} className="cursor-pointer border-2 my-5 w-[800px] p-3 rounded-lg relative hover:bg-gray-300">
         
           <div className="flex space-x-0.5 items-center text-sm  text-gray-600 bottom-2 left-3 absolute">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{v._count.favs}</span>
          </div>
           <span className="absolute bottom-2 right-2 text-sm">{v.createAt.toString()}</span>
           <p className="p-4 m-4 rounded-lg">{v.description}</p>
       
        </div></Link>
      ))}
      
    </div>
  );
};
