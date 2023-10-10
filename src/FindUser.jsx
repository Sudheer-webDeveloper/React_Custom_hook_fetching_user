import { useState } from "react";
import GitHubUser from './GitHubUser';

const FindUser = () =>{
    const [userName , setUserName] = useState("");


   
  
    return (
        <div className="find-user">
            <h1 className="first">Find User</h1>
            <form>
                <div className="from-group">
                    <label htmlFor="username"></label>
                    <input type="text" placeholder="Enter username" onChange={function change(event){ setUserName(event.target.value)}} />
                </div>
            </form>

            <div className="result">
                {userName ?
                <GitHubUser searchUserName = {userName} /> :   // here we are making relationship with another component by using prop ....
                 <p>Please Initiate a Search !!!</p>
                
            }

            </div>
        </div>
    )
}


export default FindUser;








 // function change(event){

    //     setUserName(event.target.value)

    // }


// this is anonymous arrow function without name
    // (event) =>{
    //     setUserName(event.target.value)
    // }
