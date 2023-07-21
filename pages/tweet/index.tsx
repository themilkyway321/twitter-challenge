import { useRouter } from "next/router"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMutation from "../../lib/useMutataion";
import { Tweet } from "@prisma/client";
import Link from "next/link";

interface TweetForm {
  description:string;
}
interface UploadTweetMutation{
  ok:boolean;
  tweet:Tweet;
}
export default() => {
  const router = useRouter();
  const {register,handleSubmit}=useForm<TweetForm>();
  const [uploadTweet, {loading, data}]=useMutation<UploadTweetMutation>("/api/tweet");
  const onValid =(data:TweetForm)=>{
   if(loading) return;
   uploadTweet(data);
  };
  useEffect(()=>{
    if(data?.ok){
      router.push(`/tweet/${data.tweet.id}`);
    }
  },[data,router]);

  return(
    <div className="bg-gray-300 h-[100vh] w-full absolute">
       
        <form onSubmit={handleSubmit(onValid)} className="bg-white absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] w-[800px] border-2 text-center py-20 rounded-lg h-[300px]">
        <Link href="/"><span className="text-gray-500 absolute top-2 left-1 text-2xl  cursor-pointer bg-white hover:bg-gray-200 w-[35px] h-[35px] rounded-full">&larr;</span></Link>
              <input 
               {...register("description",{required:true})}
              type="text" placeholder="What is happening?!" 
              className="absolute top-0 left-[50%] translate-x-[-50%] w-[90%] h-[220px] outline-none text-[30px] px-7 border-b my-"
              />
              <div>
                <label className="absolute bottom-2 left-3 cursor-pointer text-[#03A9F4]  hover:bg-blue-100 rounded-md">
                  <svg
                    className="h-12 w-12"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input type="file" className="hidden" />
                </label>
            </div>
              <button className="absolute bottom-0 right-4 cursor-pointer bg-[#119ffb] text-lg px-10 py-2 rounded-3xl text-white font-bold my-4 hover:bg-blue-500">Tweet</button>
            
        </form>
     
    </div>
  )
}