
const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {

    const handleDelete = ()=> {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        handleOpenForm()
    }


  return (
    <article className="contenedor_usercard">
        <h3 className="titulo_usercard">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
        <ul className="ul_usercard">
            <li><span className="span1_usercard">Email: </span><br /><span className="span2_usercard">{user.email}</span></li>
            <li><span className="span1_usercard">Birthday: </span><br /><span className="span2_usercard">{user.birthday}</span></li>
        </ul>
        <div className="contenedor_btn">
            <button className="boton_usercard"  onClick={handleDelete}>Delete</button>
            <button className="boton_usercard" onClick={handleEdit}>Edit</button>
        </div>
    </article>
  )
}

export default UserCard