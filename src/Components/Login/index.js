import { Component } from "react";

class Login extends Component{


  state = {
    name: '',
    email: '',
    pasword: '',
  }

  onSubmitFunction = (event) => {
    event.preventDefault()

    const {pasword,name,email} = this.setState
    console.log(pasword,name,email)

  }

  handleChangename = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeemail = (event) => {
    this.setState({email: event.target.value})
  }

  handleChangepassword = (event) => {
    this.setState({pasword: event.target.value})
  }
    
    render(){
      const {name,email,pasword} = this.state
        return(
            <div className="flex items-center h-screen w-full bg-slate-900">
            <div className="w-full bg-indigo-400 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>      
              <form className="mb-4" onSubmit={this.onSubmitFunction}>
                <div className="mb-4 md:w-full">
                  <label for="email" className="block text-xs mb-1">Username</label>
                  <input 
                  type="text"
                  name="name" onChange={this.handleChangename} value={name} className="w-full border rounded p-2  outline-none focus:shadow-outline"  id="email" placeholder="Username"/>
                </div>
                <div className="mb-4 md:w-full">
                  <label for="email" className="block text-xs mb-1">Email</label>
                  <input 
                  type="text"
                  name="email"  value={email} onChange={this.handleChangeemail} className="w-full border rounded p-2 outline-none focus:shadow-outline"  id="email" placeholder="Email"/>
                </div>
                <div className="mb-6 md:w-full">
                  <label for="password" className="block text-xs mb-1">Password</label>
                  <input type="text"
            name="pasword" value={pasword} onChange={this.handleChangepassword} className="w-full border rounded p-2 outline-none focus:shadow-outline"  id="password" placeholder="Password" />
                </div>
                <button type="button" className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
              </form>
              <a className="text-blue-700 text-center text-sm" href="/login">Register Now</a>
          </div>
        </div>
        )
    }
}
export default Login;