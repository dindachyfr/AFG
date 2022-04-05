import React from 'react'
import styles from './modal.module.css'

const Modal = ({signout, name}) => {
  return (
    <main 
    class={`${styles.modalNotif} py-3 bg-grey`}>
        <p className={`text-danger p-3 d-lg-none d-block mb-0`}>
          Signed in as <br />
          <strong>{name}</strong>
        </p>
        <p className={`text-danger p-3 d-lg-none d-block mb-0 ${styles.hoverText}`}>
          Home
        </p>
        <p className={`text-danger p-3 d-lg-none d-block mb-0 ${styles.hoverText}`}>
          How to use
        </p>
        <p className={`text-danger p-3 d-lg-none d-block mb-0 ${styles.hoverText}`}>
          Pricing
        </p>
        <p className={`text-danger p-3 d-lg-none d-block mb-0 ${styles.hoverText}`}>
          FAQ
        </p>
        <p className={`text-danger pointer p-3 k mb-0 ${styles.hoverText} fw-bold`}
        onClick={signout}>
          Sign Out
        </p>



</main>
)
}

export default Modal