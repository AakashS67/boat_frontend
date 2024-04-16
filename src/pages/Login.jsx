import Typography from '@mui/joy/Typography';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email:"",
        password:""
    })

    const handleOnchange = (e)=>{
      setData({...data, [e.target.name]: e.target.value})
    } 

    const handleSubmit =(e) =>{
            e.preventDefault()

    }
    return (
        <section id="login">
            <div className="max-w-[300px] border shadow-md mx-auto my-5 py-4 px-3 flex flex-col gap-2">
                <div className="text-center">
                    <h1>Login</h1>
                </div>
            
                <form className="gap-2" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input onChange={handleOnchange} value={data.email} className="form-control mb-2 outline-none bg-light" name="email" type="email" placeholder="Enter email" />
                    <div>
                        <label>Password</label>
                        <div className="flex items-center border rounded">
                            <input onChange={handleOnchange} value={data.password} className="form-control outline-none bg-light" name="password" type={showPassword ? "text" : "password"} placeholder="password" />
                            <div className="cursor-pointer p-2" onClick={()=>setShowPassword((type)=>!type)}> 
                                {
                                    showPassword ?
                                        (<FaEyeSlash/>)
                                        :
                                        (<FaEye/>)
                                }
                            </div>
                        </div>                        
                      <Link to="/forget-password" className="text-decoration-none">Forget password?</Link>
                    </div>
                    <button className="mt-2 btn btn-dark mx-auto hover:scale-105 transition-all ease-in">Login</button>
                </form>
                <Typography
                    endDecorator={<Link to="/sign-up" className="text-decoration-none">Sign up</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Don&apos;t have an account?
                </Typography>
            </div>
        
        </section>
    );
}

export default Login