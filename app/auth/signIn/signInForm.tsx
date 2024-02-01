"use client";

import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const email = data.email;
    const password = data.password;
    const signInData = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.refresh();
      router.push("/profile");
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="h-[55vh] w-[85vw] md:w-[65vw] lg:w-[35vw] rounded-lg bg-base-200 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to Warm Wood Homes
        </h1>
        <div className="space-y-4 text-center">
          <button
            className="btn btn-google w-72 border-black border-1"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/profile",
              })
            }
          >
            <FcGoogle size={20} className="mr-2" />
            Login with Google
          </button>
          <button className="btn btn-apple w-72 border-black border-1 ml-2">
            <FaApple size={20} className="mr-2" />
            Login with Apple
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div
            className="bg-gray-400"
            style={{ height: "1px", width: "43%" }}
          />
          <h1 className="text-lg">or</h1>
          <div
            className="bg-gray-400"
            style={{ height: "1px", width: "43%" }}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors?.email && (
              <span className="text-sm text-red-600">
                Email address cannot be blank
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors?.password && (
              <span className="text-sm text-red-600">
                Password cannot be blank
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
