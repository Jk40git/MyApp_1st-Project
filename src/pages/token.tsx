import { useState } from "react";
import { supabase } from "../Supabase";
import { Link } from "react-router-dom";


const Login = () => {
    const [formData, setFormData] = useState({ phoneNumber: '', password: ''})
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
            const { data, error } = await supabase.auth.signInWithPassword({
                phone: formData.phoneNumber,
                password: formData.password,
            })
    
            

        } catch (error) {
            alert(error)
        }
        
        // After receiving a SMS with a OTP.

            const { data, error } = await supabase.auth.verifyOtp({
                phone: formData.phoneNumber,
                token: formData.token,
            })


    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input placeholder="Phonenumber" type="phonenumber" name="phoneNumber" onChange={handleChange} />

                <input placeholder="Password" type="password" name="password" onChange={handleChange} />

                <button type="submit">
                    Login
                </button>

            </form>
            Don't have an account? <Link to={'/signup'}>SignUp</Link>
        </div>
    )
}
export default Login;
