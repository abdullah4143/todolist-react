import axios from "axios";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

interface User{
    name: string;
    id : number;
}

const Users = () => {
    const [users,setUsers] = useState<User[]>([]);

    useEffect(()=>{
        axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
            .then((res)=> setUsers(res.data));
    },[])

    return (
    <ul>
        {users.map((user)=> {return <li key={user.id}>{user.name}</li>})}
    </ul>
  )
}

export default Users