import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HomePost from "../components/HomePost"

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="px-8 md:px-[200px]">
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
      </div>
      <Footer />
    </>

  )
}

export default Home
