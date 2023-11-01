import React from 'react'
import "/src/assets/css/Button.css";

const Button = (props) => {
  var cl1="btn1"
  var cl2="btn2"
  return (
        <button className={props.isWhite?cl1:cl2}>
           { props.text}
        </button>
  )
}

export default Button