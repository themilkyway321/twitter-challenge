import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form"

interface EmailForm {
  email: string;
}
export default function Login(){
  const {
    register,
    handleSubmit,
  } = useForm<EmailForm>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onValid = async (data: EmailForm) => {
    if (!loading) {
      const request = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (request.status === 200) {
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  };

  return(
 <div className="bg-gray-300 h-[100vh] w-full absolute">
    <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] bg-gray-100 w-[800px] border-2 text-center py-20 rounded-lg">
      <div className="flex flex-col items-center">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg></div>
      <h1 className="text-3xl font-bold my-8">Log in to Twitter</h1>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col w-[70%] mx-auto items-center">
       
            <input
              type="email"
              placeholder="Write your email"
              {...register("email", { required: true })}
              className="border-2 w-[50%] p-2 rounded-md focus:outline-none focus:border-[#119ffb]"
            />
            
            <button className="cursor-pointer mx-auto mt-5 w-[250px] py-1.5 rounded-3xl border-2  text-[#119ffb] font-semibold text-md hover:bg-blue-100 transition-all">Login</button>
          
      </form>
    </div>
 </div>
  )
}