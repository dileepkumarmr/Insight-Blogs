
const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center spacec-y-4 w-[80%] md:w-[25%]">
        <h1>Log in to your account</h1>
        <input type="text" placeholder="Enter your email"/>
        <input type="text" placeholder="Enter your password"/>
        <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg  ">Log in</button>
      </div>
    </div>
  )
}

export default Login
