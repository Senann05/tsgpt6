import { useState, useEffect } from "react"

interface User{
  id:number;
  name: string;
  email: string;
}

function FetchUsers() {
  const[users, setUsers] = useState<User[]>([])
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState<string | null>(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      if(!res.ok){
        throw new Error("Cavab alinmadi!")
      }
      return res.json();
    })
    .then((data)=>{
      setUsers(data);
      setLoading(false)
    })
    .catch((err)=>{
      setError(err.message);
      setLoading(false);
    })
  },[]);
  if(loading)return <p>Loading...</p>
  if (error)return <p>Error {error}</p>
 return(
  <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
     )}
export default FetchUsers;
