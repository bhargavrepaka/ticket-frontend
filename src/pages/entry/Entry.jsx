import "./Entry.style.scss"
import Login from "../../components/login/Login"
import { useState } from "react"
import PasswordReset from '../../components/password-reset/PasswordReset'

const Entry = () => {
  const [email,setEmail]=useState("")
  // eslint-disable-next-line no-unused-vars
  const [password,setPassword]=useState("")
  const [formLoad,setFormLoad]=useState("login")

  function handleOnChange(e){
    const {name,value}=e.target
    console.log(name, value)
    switch(name){
      case "email":
        setEmail(value)
        break
      case "password":
        setPassword(value)
        break
      default:
        break
    }
  }
 
  function handleOnResetSubmit(e){
    e.preventDefault()
    //todo submit to api call
    console.log(email)
  }

  function formSwitcher(formType){
    setFormLoad(formType)
  }



  return (
    <div className="entry-page bg-info"> 
      <div className=" p-5 bg-white text-black rounded form-box">

       {formLoad==="login" && 
          <Login 
              formSwitcher={formSwitcher}> 
              formFor={}
          </Login>
        }

        {formLoad==="reset" && 
          <PasswordReset 
              handleOnChange={handleOnChange} 
              handleOnResetSubmit={handleOnResetSubmit} 
              email={email}
              formSwitcher={formSwitcher}  >
          </PasswordReset>
        }
      </div>
    </div>
  )
}

export default Entry