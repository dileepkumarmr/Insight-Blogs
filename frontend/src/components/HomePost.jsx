
const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="" alt="" className="h-full w-full object-cover" />
      </div>

      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1">
          10 Uses of Artificial Intelligence in Day to Day life.
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@dileep_yadav</p>
          <div className="flex space-x-2">
          <p>16/11/2002</p>  
          <p>16:44</p>
          </div>
        </div>
        <p className="text-sm md:text">Pjkdaasdf;klj;jh asdfg ;kljh asdfg ;l;kjhj asdfgg ;kljh asdf; ;lkjhh</p>
      </div>
    </div>
  )
}

export default HomePost
