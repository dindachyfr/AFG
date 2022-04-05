import React, { useState } from 'react'
import styles from './auth.module.css'
import Logo from '../../assets/titleText.svg'
import GIcon from '../../assets/googleIcon.svg'
import Button from '../../components/Button'
import Store from '../../Store'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = observer(() => {
    const [form, setForm] = useState({
        email: '', 
        password: ''
    })
    const navigate =  useNavigate()
    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleLogin = async () => {
        try{
            const res = await axios.post(`${process.env.REACT_APP_URL}/users/login`, form)
            const {data} = res
            const user = data.data
            const token = user.token
            Store.setToken(token)
            localStorage.setItem('token', token)
            navigate('/')
            }catch(err) {
                const message = err
                Store.setErrMsg(message.response.data.message)
                }
    }
    return (
        <main className={`${styles.con} container-fluid g-0 w-100 bg-light d-flex flex-lg-row flex-column`}>
            <section className={`${styles.leftBox}`}>
                <div className={`wrapper ${styles.paddingLeft}`}>
                    <img src={Logo} className={styles.title} alt="" />
                    <div className="wrapper w-75 my-lg-5">
                        <h3 className="text-white">Enjoy the Convenience of
                            Beam Space Storage</h3>
                    </div>
                </div>
            </section>
            {/* <section className={`d-block d-lg-none ${styles.bgMobile}`}>
            <img src={Logo} className={styles.title} alt="" />
            </section> */}
            <section className={`${styles.rightBox} w-50`}>
                <h3 className="text-danger mb-3">Log in to Beam Space</h3>
                <div className="rounded-3 bg-white w-100 d-flex justify-content-center pointer align-items-center py-2">
                    <img src={GIcon} alt="" />
                    <p className="ms-2 mb-0 fw-bold">Login with Google</p>
                </div>
                <div className="rounded-3 bg-blue w-100 d-flex justify-content-center align-items-center my-3 pointer py-2">
                    <p className="text-white mb-0 fw-bold">f</p>
                    <p className="ms-2 mb-0 fw-bold text-white">Login with Facebook</p>
                </div>
                <div className="w-100 mt-3 d-flex justify-content-between align-items-between">
                    <hr className='w-25 text-secondary' />
                    <p className="text-secondary mb-0">or login with your email</p>
                    <hr className='w-25 text-secondary' />
                </div>
                <div className="wrapper-form mt-3 w-100">
                    <h5 className='mb-3'>Email Address <span className='text-danger'>*</span></h5>
                    <input 
                    type="text"
                    className={`w-100 p-2  ${styles.inputForm}`}
                    name='email'
                    value={form.email}
                    onChange={handleForm}
                    placeholder='E.g, name@email.com'
                    />
                </div>
                <div className="wrapper-form my-3 w-100">
                    <h5 className='mb-3'>Password <span className='text-danger'>*</span></h5>
                    <input 
                    type="password"
                    className={`w-100 p-2  ${styles.inputForm}`}
                    name='password'
                    onChange={handleForm}
                    value={form.password}
                    placeholder='Enter your password'
                    />
                </div>
                <Button 
                className={form.password.length < 6 || !form.email ? `w-100 bg-secondary text-white text-center rounded-3 py-2 ${styles.btnLogin}` :`w-100 bg-danger text-white text-center rounded-3 py-2 ${styles.btnLogin}`}
                disabled={form.password.length < 6 || !form.email}
                onClick={handleLogin}>
                    Login
                </Button>
                {Store.errMsg && <h4 className='text-danger'>{Store.errMsg}</h4> }
                <p className={`text-center fw-bold pointer mt-3 ${styles.fgpw}`}>Forgot Password?</p>
                <p className={`text-center fw-bold mb-0`}>Don’t have an account?
                <span className={`${styles.fgpw} pointer`}> Create an account</span></p>
            </section>
        </main>
    )
}
)
export default Login