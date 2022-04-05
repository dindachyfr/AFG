import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import Logo from '../../assets/titleText.svg'
import Beam2 from '../../assets/beam2.jpg'
import Button from '../../components/Button'
import Beam3 from '../../assets/Boxes.svg'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Store from '../../Store'
import axios from 'axios'

const Home = observer(() => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const signout = () => {
        localStorage.clear()
        navigate("/login")
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/users/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                const data = res.data?.data
                Store.setProfile(data)
            }).catch((err) => {
                console.log(err);
            })
    }, [token])
    return (
        <main className={`container-fluid d-flex flex-column g-0 bg-white ${styles.con}`}>
            <nav className={`w-100 bg-danger p-lg-5 p-3 d-flex justify-content-between align-items-between`}>
                <img src={Logo} className={`${styles.logo}`} alt="" />
                <div className="w-50 d-lg-flex d-none justify-content-between">
                    <p className={`text-white mb-0 fw-bold pointer`}>Home</p>
                    <p className={`text-white mb-0 fw-light pointer`}>How to use</p>
                    <p className={`text-white mb-0 fw-light pointer`}>Pricing</p>
                    <p className={`text-white mb-0 fw-light pointer`}>FAQ</p>
                </div>
                <div className="d-flex ms-3">
                    <p className="text-white d-lg-block d-none">Hi, <strong>{Store.profile.name}</strong></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" 
                    class="bi bi-list text-white d-block d-lg-none pointer" viewBox="0 0 16 16"
                    onClick={handleModal}>
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class={`ms-2 bi bi-person-circle text-white d-lg-block d-none pointer`} viewBox="0 0 16 16"
                        onClick={handleModal}>
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>
            </nav>
            <section className={`flex-fill p-lg-5 p-3 bg-white`}>
                <h3 className="text-danger text-center">Convenience at your fingertip!</h3>
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className={`d-lg-block d-none left w-75 ${styles.beam2text}`}>
                        <p>The BEAM Space mobile app provides you with complete visibility of all of your inventory stored with BEAM, including photos of each individual item.
                            Conveniently schedule a pickup or delivery of your items right in the app with as little as 4 hours notice.
                            To help ensure that you always know what you have in storage and remain organized, you can even group your items in any way that is meaningful to you
                            and write detailed descriptions of each item stored (for example, a description of what is in each box).
                            For our business and corporate customers, we can even provide more granular inventory management, such as keeping track of quantity by SKU level.</p>
                    </div>
                    <img src={Beam2} alt="" className={`${styles.beam2}`} />
                </div>
            </section>
            <section className={`w-100 bg-danger p-lg-5 p-3`}>
                <h2 className="text-white text-center">Need a dedicated account manager for your inventory?</h2>
                <p className="text-white text-center my-5">Upgrade to Corporate / VIP account now!</p>
                <div className="wrapper d-flex justify-content-center w-100">
                    <Button
                        className={`bg-white text-danger text-center rounded-3 p-3 ${styles.btnLogin} mx-auto`}
                    >
                        Learn More
                    </Button>
                </div>
            </section>
            <section className={`w-100 bg-light p-lg-5 p-3`}>
                <h2 className="text-danger text-center ">Need a larger space?</h2>
                <div className="d-flex align-items-center mt-3">
                    <img src={Beam3} className={`${styles.boxes}`} alt="" />
                    <div className={`w-50 px-3 ${styles.boxestext}`}>
                        <div className="w-100 bg-danger text-white rounded-3 p-3 text-center text-capitalize">Call us on +65 3129 4445</div>
                        <div className="w-100 bg-danger text-white rounded-3 my-3 p-3 text-center text-capitalize">Email us</div>
                        <div className="w-100 bg-danger text-white rounded-3 p-3 text-center text-capitalize">Chat widh us</div>
                    </div>
                </div>
            </section>
            <footer className={`bg-blue-light p-lg-5 p-3 d-flex flex-column flex-lg-row justify-content-lg-between align-items-center`}>
                <p className="text-grey mb-0">2022 Beam. All rights reserved.</p>
                <p className="text-grey mb-0">+65 3129 4445</p>
                <p className="text-grey mb-0">cs@beamspace.com</p>
            </footer>
            {modal && <Modal name={Store.profile.name} signout={signout} />}
        </main>
    )
})

export default Home