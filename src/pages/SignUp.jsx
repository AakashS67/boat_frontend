import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';


const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }



  return (
    <section id="signup">
      <div className="max-w-[300px] border shadow-md mx-auto my-5 py-4 px-3 flex flex-col gap-2">
        <div className="text-center">
          <h1>Sign Up</h1>
        </div>
        <form className="gap-2" onSubmit={handleSubmit}>
          <label>Name</label>
          <input onChange={handleOnchange} value={data.name} className="form-control mb-2 outline-none bg-light" name="name" type="name" placeholder="Enter name" required/>
          <label>Email</label>
          <div>
            <input onChange={handleOnchange} value={data.email} className="form-control mb-2 outline-none bg-light" name="email" type="email" placeholder="Enter email" required/>
          </div>
          <div>
            <label>Password</label>
            <div className="flex items-center border rounded mb-2">
              <input onChange={handleOnchange} value={data.password} className="form-control outline-none bg-light" name="password" type={showPassword ? "text" : "password"} placeholder="password" required/>
              <div className="cursor-pointer p-2" onClick={() => setShowPassword((type) => !type)}>
                {
                  showPassword ?
                    (<FaEyeSlash />)
                    :
                    (<FaEye />)
                }
              </div>
            </div>
          </div>
          <div>
            <label>Confirm Password</label>
            <div className="flex items-center border rounded mb-2">
              <input onChange={handleOnchange} value={data.cpassword} className="form-control outline-none bg-light" name="cpassword" type={showConfirmPassword ? "text" : "password"} placeholder="confirm password" required/>
              <div className="cursor-pointer p-2" onClick={() => setShowConfirmPassword((type) => !type)}>
                {
                  showConfirmPassword ?
                    (<FaEyeSlash />)
                    :
                    (<FaEye />)
                }
              </div>
            </div>
          </div>
          <button className="mt-2 btn btn-dark mx-auto w-50 hover:scale-105 transition-all ease-in">Sign Up</button>
        </form>
        <Typography
          endDecorator={<Link to="/login" className="text-decoration-none">Login</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </div>

    </section>
  )
}

export default SignUp