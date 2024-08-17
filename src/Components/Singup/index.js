import { Component } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


class Singup extends Component{
    render(){
        return(
            <div class="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
          <div>
            <h4 class="text-white text-lg font-semibold">Create Your Account</h4>
            <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
          </div>
          <div>
            <h4 class="text-white text-lg font-semibold">Simple & Secure Registration</h4>
            <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
          </div>
        </div>

        <form class="md:col-span-2 w-full py-6 px-6 sm:px-16">
          <div class="mb-6">
            <h3 class="text-gray-800 text-2xl font-bold">Create an account</h3>
          </div>

          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Name</label>
              <div class="relative flex items-center">
                <input name="name" type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
              </div>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
              <div class="relative flex items-center">
                <input name="email" type="email" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
              </div>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <div class="relative flex items-center">
                <input name="password" type="password" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
                <IoEyeSharp onClick={this.testing} class="w-4 h-4 absolute right-4 cursor-pointer" />
              </div>
            </div>

            <div class="flex items-center">
              <label for="remember-me" class="ml-3 block text-sm text-gray-800">
              By creating an account you agree to <a target="_blank" rel="noreferrer" href="https://superb-sword-de5.notion.site/Terms-and-Conditions-09255999320245cfb2bd1efce41dec68" class="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div class="!mt-12">
            <button type="button" class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
              Create an account
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to="/login"><span class="text-blue-600 font-semibold hover:underline ml-1">Login here</span></Link></p>
        </form>
      </div>
    </div>
        )
    }
}

export default Singup;