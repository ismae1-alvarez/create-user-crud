import { useState } from "react"
import axios from 'axios'


const useUsers = () => {
    const [users, setUsers] = useState<ModelUsers[] >([])

    // GET Users
    const getUsers = ()=>{
        const url  = 'https://users-crud.academlo.tech/users/'
        axios.get(url)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    // POST User
    const postUser = (data:ModelForm) =>{

        const url  = 'https://users-crud.academlo.tech/users/'
        axios.post(url, data)
            .then(res => {
                console.log(res.data);
                setUsers([...users, res.data]);
            })
            .catch(erro => console.log(erro))
            console.log(users)

    }

    // GET User
    const getUser = (id:string)=>{
        
    }

    // PUT User 
    const patchUser = (id:string) => {

    }

    const deleteUser = (id: string) =>{

    }


    return {postUser, getUsers, users}
    

}
export default useUsers