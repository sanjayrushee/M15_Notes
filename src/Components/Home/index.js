import { Component } from "react";
import Navbar from "../Navbar";

class Home extends Component{
    render(){
        return(
            <>
            <Navbar />
            <aside className="fixed top-16 start-0 w-64 h-full bg-gray-50 dark:bg-gray-800 shadow-lg">
        <div className="overflow-y-auto py-4 px-3">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
                </svg>
                <span className="ml-3">Notes</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
            <div>
                <h2>hello this is home</h2>
            </div>
            </>
        )
    }
}

export default Home