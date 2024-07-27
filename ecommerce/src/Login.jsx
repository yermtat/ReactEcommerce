import React from "react";

export default function Login() {
  return (
    <div>
      <div class="h-screen flex justify-center items-center dark:bg-gray-900">
        <div class="grid gap-8">
          <div id="back-div" class="  rounded-[70px] m-4">
            <div class="border-[70px] border-transparent rounded-[70px] bg-gray-400 shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
              <h1 class="pt-8 pb-6 font-bold text-white text-5xl text-center cursor-default">
                Log in
              </h1>
              <form action="#" method="post" class="space-y-4">
                <div>
                  <input
                    id="email"
                    class="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    id="password"
                    class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  class="dark:text-gray-300 bg-black shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:text-orange-600 transition duration-300 ease-in-out"
                  type="submit"
                >
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
