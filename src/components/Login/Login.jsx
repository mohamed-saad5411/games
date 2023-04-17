import React from 'react'
import styles from './Login.module.css'
import LoginImage from '../../assets/gaming.ebaf2ffc84f4451d.jpg'
import LogoImage from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export default function Login() {

  let navigate = useNavigate()

  async function handleLogin(values) {
  let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values)
  if (data.message === "success") {
    navigate('/home')
  }
  // console.log(data)
  // console.log('hiiiiii');
}

let validationSchema = Yup.object({

  email: Yup.string().required('Email is Required').email('Email must me example@gmail.com'),
  // password:Yup.string().required('frist name required').min(3 ,'min 3 charachters').max(15 ,'max 15 charachters'),

})

let formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema,
  onSubmit: handleLogin
})

function myMessage() {
  window.alert("اعمل اكونت جديد ههههههههههههه")
}

return (
  <>
    <div className="container custom-shadow bg-dark custom-margin">
      <div className="row">
        <div className="col-md-6 ps-0">
          <img src={LoginImage} className='w-100 h-100' alt="" />
        </div>
        <div className="col-md-6">
          <div className='text-center py-4'>
            <img src={LogoImage} className='w-25' alt="" />
            <h4 className='my-2'>Log in to GameOver</h4>
            <form className='w-75 border-bottom border-muted m-auto pb-3 '>
              <input className='form-control my-3' type="text" placeholder='Email' />
              <input className='form-control my-3' type="text" placeholder='Password' />
              <button type='submit' className='btn btn-warning w-100'>Login</button>
            </form>
            <p className='my-2'><Link onClick={myMessage} to=''>Forgot Password?</Link></p>
            <p>Not a member yet? <Link to='../signup'>Create Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  </>

)

}
