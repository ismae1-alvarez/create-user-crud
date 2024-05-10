import { useForm, SubmitHandler } from "react-hook-form"
import useUsers from "./hook/useUsers"
import { Fragment, useEffect } from "react"








export default function App() {
  const {postUser, getUsers, users} = useUsers()

  const { register, handleSubmit } = useForm<ModelForm>()

  const onSubmit: SubmitHandler<ModelForm> = (data:ModelForm) => {
    postUser(data)
  }



  useEffect(() => {

    getUsers()
  }, [])
  
  console.log(users)

  return (
    <Fragment>
      <form className="bg-red-700 flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input {...register('email')} />

          <label>Password</label>
          <input type="password" {...register('password')} />

          <label>First Name</label>
          <input {...register('first_name')} />

          <label>Last Name</label>
          <input {...register('last_name')} />

          <label>Birthday</label>
          <input type="date" {...register('birthday')} />

          <label>URL</label>
          <input {...register('image_url')} />

          <input type="submit" />
      </form>

      {users ? users?.map((e)=>
        <div key={e.id}>
          <p>
            {e.email}
          </p>
          <p>
            {e.last_name}
          </p>
        </div>

      ) : <p> no hay user</p>}

    </Fragment>
  )
}