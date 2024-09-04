import { Component } from "react";
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'


const Api_link_login = process.env.REACT_APP_API_URL_LOGIN

class Login extends Component{


  state = {
    email: '',
    password: '',
  }

  onSubmitSuccess = jsToken => {
    const {history} = this.props
    Cookies.set('jwtToken',jsToken)
    history.replace("/")
  }
  
  onSubmitFail = errorMsg => {
    alert(errorMsg)
  }

  onSubmitFunction = async (event) => {
    event.preventDefault()

    const { email, password } = this.state;
    console.log(password, email);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ 
        email,
        password
      }),
    };

    try {
      const response = await fetch(Api_link_login, options);
      const data = await response.json();

      if (response.ok) {
        this.onSubmitSuccess(data.jwtToken)
      } else {
       this.onSubmitFail(data.error)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  handleChangeemail = (event) => {
    this.setState({email: event.target.value})
  }

  handleChangepassword = (event) => {
    this.setState({password: event.target.value})
  }
    
    render(){
    
      const {email,password} = this.state
             return(
              <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
                <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                  <div
                    className="hidden md:block lg:w-3/4  bg-blue-700 backgroundimageforlogin"
                  ></div>
                  <form onSubmit={this.onSubmitFunction} className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <div className="mt-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                      </label>
                  
                      <input
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                        type="email"
                        required
                        value={email}
                        onChange={this.handleChangeemail}

                      />
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Password
                        </label>
                      </div>
                      <input
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                        type="text"
                        required
                        value={password}
                        onChange={this.handleChangepassword}
                      />
                     
                    </div>
                    <div className="mt-8">
                      <button  type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                        Login
                      </button>
                    </div>
                    <div className="mt-4 flex items-center w-full text-center">
                      <p
                        className="text-xs text-gray-500 capitalize text-center w-full"
                      >
                        Don&apos;t have any account yet?
                        <Link to="/signup">
                        <span className="text-blue-700"> Sign Up</span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
        
          
        )
    }
}
export default Login;