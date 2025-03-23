import { useEffect, useState } from "react";

interface User{
    name:string;
    id: number;
    email:string;
};

function UserList() {
const [users, setusers] = useState<User[]>([]);
const [error, setError] = useState<string>("")
const [loading,setLoading]= useState<boolean>(true)

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        if(!res.ok){
            setError("404")
        }
        return res.json();
    })
    .then((data)=>{
        setusers(data);
    })
    .catch((error)=>{
        setError(error.message)
    })
    .finally(()=>{
        setLoading(false)
    })
},[])
 return(
    <div>
        <h2>User List</h2>
        {loading && <p>loading...</p>}
        {error && !loading && <p style={{ color: "red" }}>{error}</p>}
        {!error && !loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default UserList;