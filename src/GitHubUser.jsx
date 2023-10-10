import useGitHub from "./customhooks/useGithub";



const GitHubUser = ({searchUserName}) => {

    const {user, loading, error} = useGitHub(searchUserName)


    return(
        <div className="github-user">
            {loading && <p>Loading...</p>}

            {error && <p>{error.message}</p>}

            {
                user && (
                    <ul className="user-details">
                        <li>
                            <img src={user.avatar_url} alt={user.logon} />
                        </li>
                        <li>
                            <strong>Name:</strong>{user.name}
                        </li>
                        <li>
                            <strong>Bio:</strong>{user.name}{user.bio ? user.bio : "NA"}
                        </li>
                        <li>
                            <strong>Location:</strong>{user.location}
                        </li>
                        <li>
                            <strong>Blog Or Site:</strong>{user.blog ? user.blog : "NA"}
                        </li>
                        <li>
                            <strong>Public Repos:</strong>{" "}{user.public_repos ? user.public_repos : 0}
                        </li>
                        <li>
                            <strong>Public Repos:</strong>{" "}{user.public_repos ? user.public_repos : 0}
                        </li>
                        <li>
                            <strong>Followers:</strong>{" "}{user.followers ? user.followers : 0}
                        </li>
                        <li>
                            <strong>Following:</strong>{" "}{user.following ? user.following : 0}
                        </li>

                    </ul>
                )
            }
        </div>
    )
}

export default GitHubUser;






// https://api.github.com/users/aapas // this is a public api of github







// initially this file with this data later we create a customhook called useGitHub at there we did a state management operations 

//import { useState, useEffect } from "react";
// const GitHubUser = ({searchUserName}) => {

//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(null);
    
    
    
//     useEffect(()=>{  // fectch data , network call these all are side efffects so is we want to update our dom without affecting the we have use these sideeffects inside the useEffect hook
    
//         const fetchData = async() => {
//            setLoading(true);
    
//            try{
//                  const response = await fetch(`https://api.github.com/users/${searchUserName}`) // this will receive the data from the server
    
//                  const responseData = await response.json() // here we are receiving the response , data in the form of json
    
//                  setUser(responseData)
    
//                  console.log(responseData)
    
//                  setLoading(false); // once the data fetched we have make setLoading as false
    
                
//            }
//            catch(error){
    
//             setError(error); // if any case errror happens we are handling here then also we have to stop our loading so , we keep setLoading as false
    
//             setLoading(false);
    
//            }
            
    
//         }
    
    
    
//         fetchData()
//     },[searchUserName])
    
    