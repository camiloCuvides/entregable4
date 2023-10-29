import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://backend-entregable2-dev-fdre.3.us-1.fl0.io'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

  useEffect (() => {
    getUsers('/users')
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }


  return (
    <div className='contenedor_app'>
      <header className='encabezado'>
        <h1 className='titulo_app'>Users</h1>
        <button onClick={handleOpenForm} className='formuser_btn'>Open Form</button>
      </header>
      <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='contenedor_card'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
