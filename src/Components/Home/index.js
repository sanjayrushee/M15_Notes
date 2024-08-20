import { Component } from "react";
import Navbar from "../Navbar";

class Home extends Component{
    render(){
        return(
            <>
            <Navbar />
            <div>
                <h2>hello this is home</h2>
            </div>
            </>
        )
    }
}

export default Home