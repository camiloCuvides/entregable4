import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {


    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
        if (infoUpdate) {
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
        } else {
            createUser('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
          })
    }

    const handleCloseForm = () => {
        setCloseForm(true)
    }

  return (
    <div onClick={handleCloseForm} className={`formuser_container ${closeForm && 'close_form'}`}>
        <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
            <h2 className="formuser_title">{infoUpdate ? 'Update' : 'New User'}</h2>
            <div onClick={handleCloseForm} className="formuser_close">x</div>
            <div className="formuser_grop"> 
                <label className="formuser_label" htmlFor="email">Email</label>
                <input className="formuser_input" {...register('email')} type="email" id="email" />
            </div>
            <div className="formuser_grop" >
                <label className="formuser_label" htmlFor="password">Password</label>
                <input className="formuser_input" {...register('password')} type="password" id="password" />
            </div>
            <div className="formuser_grop" >
                <label className="formuser_label"  htmlFor="first_name">First name</label>
                <input className="formuser_input" {...register('first_name')} type="text" id="first_name" />
            </div>
            <div className="formuser_grop" >
                <label className="formuser_label" htmlFor="last_name">Last name</label>
                <input className="formuser_input"  {...register('last_name')} type="text" id="last_name" />
            </div>
            <div className="formuser_grop" >
                <label className="formuser_label" htmlFor="birthday">Birthday</label>
                <input className="formuser_input" {...register('birthday')} type="date" id="birthday" />
            </div>
            <button className="formuser_btn">{ infoUpdate ? 'Update' : 'Create'}</button>
        </form>
    </div>

  )
}

export default FormUser