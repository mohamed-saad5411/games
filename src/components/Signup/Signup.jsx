import React from 'react'
import styles from './Signup.module.css'
import LoginImage from '../../assets/gaming.ebaf2ffc84f4451d.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export default function Signup() {

  let navigate = useNavigate()

  async function handleRegister(values) {
    let {data} = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values)
    if (data.message === "success") {
      navigate('/login')
    }
    // console.log(data)
    // console.log('hiiiiii');
  }

  let validationSchema = Yup.object({
    fristName: Yup.string().required('frist name required').min(3, 'min 3 charachters').max(15, 'max 15 charachters'),
    lastName: Yup.string().required('last name required').min(3, 'min 3 charachters').max(15, 'max 15 charachters'),

    email: Yup.string().required('Email is Required').email('Email must me example@gmail.com'),
    age: Yup.string().required('Age is Required').matches(),
    // password:Yup.string().required('frist name required').min(3 ,'min 3 charachters').max(15 ,'max 15 charachters'),

  })

  let formik = useFormik({
    initialValues: {
      fristName: '',
      lastName: '',
      email: '',
      age: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleRegister
  })

  return (
    <>
      <div className="container custom-shadow bg-dark custom-margin">
        <div className="row">
          <div className="col-md-6 ps-0">
            <img src={LoginImage} className='w-100 h-100' alt="" />
          </div>
          <div className="col-md-6">
            <div className='text-center py-2'>
              <h4 className='my-4 h2'>Create My Account!</h4>
              <form onSubmit={formik.handleSubmit} className='border-bottom border-muted m-auto pb-3'>
                <div className='d-flex'>
                  <input value={formik.values.fristName} name='fristName' id='fristName' onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-black form-control me-2 w-50' type="text" placeholder='Frist Name' />
                  <input value={formik.values.lastName} name='lastName' id='lastName' onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-black form-control ms-2 w-50' type="text" placeholder='Last Name' />
                </div>
                <input value={formik.values.email} name='email' id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-black form-control my-3' type="email" placeholder='Email' />
                <input value={formik.values.age} name='age' id='age' onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-black form-control my-3' type="number" placeholder='Age' />
                <input value={formik.values.password} name='password' id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-black form-control my-3' type="password" placeholder='Password' />
                <button type='submit' className='btn btn-warning w-100'>Create Account</button>
                <p className='mt-2 text-muted w-75 m-auto'>This site is protected by reCAPTCHA and the Google <span className='pointer text-decoration-underline'>Privacy Policy</span> and <span className='pointer text-decoration-underline'>Terms of Service</span> apply.</p>
              </form>
              <p className='mt-2'>Already a member? <Link to='../login'>Log In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
