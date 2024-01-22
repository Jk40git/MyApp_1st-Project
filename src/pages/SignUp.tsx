import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";


const SignUp = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phoneNumber: '', password: '' })
  console.log(formData)


  function handleChange(event: { target: { name: any; value: any; }; }) {
    setFormData((prevFormData) => {

      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }

    })
  }

  async function handleSubmit() {
    try {

      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              fullName: formData.fullName,
              phoneNumber: formData.phoneNumber,
            }
          }
        }
      )
      console.log(data)
    } catch (error) {
      alert(error)
    }

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Fullname" name="fullName" type="text" onChange={handleChange} />

        <input placeholder="Email" type="text" name="email" onChange={handleChange} />

        <input placeholder="Phonenumber" type="phonenumber" name="phoneNumber" onChange={handleChange} />

        <input placeholder="Password" type="password" name="password" onChange={handleChange} />

        <button type="submit">
          SignUp
        </button>

      </form>
      Already have an account? <Link to={'/'}>Login</Link>
    </div>
  )
}
export default SignUp;
