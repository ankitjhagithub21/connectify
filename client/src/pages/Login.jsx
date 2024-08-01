import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import Logo from '../components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/appSlice';
const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/login`
  const { user } = useSelector(state => state.app)
  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true)
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success) {
        toast.success(data.message)
        dispatch(setUser(data.user))
        navigate("/")

      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error("Something went wrong.")
      console.log(error)
    } finally {
      setLoading(false)
    }
  };
  if (user) {
    return <Navigate to={"/"} />
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-5">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-[#0A0A13] text-white p-5 rounded-xl shadow-xl">
        <div className='flex items-center justify-center mb-5'>
          <Logo />
          <h2 className="text-2xl font-bold leading-relaxed">

            Connectify</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email" className=" text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" w-full px-4 py-2 mt-1  border border-gray-300 rounded-md   "
              required
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor="password" className=" text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" w-full px-4 py-2 mt-1  border border-gray-300 rounded-md"
              required

            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
            >
              {
                loading ? 'Processing...' : 'Login'
              }
            </button>
          </div>
        </form>
        <p className='mt-5'>Don't have an account ? <Link className='underline' to={"/register"}>Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
