import { useState, useEffect } from "react";



const useGitHub = (searchUserName) =>{ //where here searchUserName is a dependenci and fecth is the sideeffect.


const [user, setUser] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(null);



useEffect(()=>{  // fectch data , network call these all are side efffects so is we want to update our dom without affecting the we have use these sideeffects inside the useEffect hook

    const fetchData = async() => {
       setLoading(true);

       try{
             const response = await fetch(`https://api.github.com/users/${searchUserName}`) // this will receive the data from the server

             const responseData = await response.json() // here we are receiving the response , data in the form of json

             setUser(responseData)

             console.log(responseData)

             setLoading(false); // once the data fetched we have make setLoading as false

            
       }
       catch(error){

        setError(error); // if any case errror happens we are handling here then also we have to stop our loading so , we keep setLoading as false

        setLoading(false);

       }
        

    }

    fetchData()
},[searchUserName])

// a function return only one value but using of array destructuring or object destructureing we can return more than one value 

// note -- here we want to import these user, loading ,error to  another component by using object destructuring 
return {user, loading ,error} ; 

}



export default useGitHub;