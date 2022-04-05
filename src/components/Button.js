import React from 'react'

const Button = ({ children, disabled, ...props }) => {
  return (
    <button disabled={disabled ? true : false} {...props}>{children}</button>
  )
}

export default Button