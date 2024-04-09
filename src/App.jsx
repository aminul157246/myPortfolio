import Navbar from "./Navbar/Navbar"
import About from "./pages/About/About"
import ContactUs from "./pages/ContactUs/ContactUs"
import Footer from "./pages/Footer/Footer"
import Home from "./pages/Home/Home"
import MyExperience from "./pages/MyExperience/MyExperience"
import MyProject from "./pages/MyProject/MyProject"
import MySkill from "./pages/MySkill/MySkill"


function App() {

  return (
   <div>
    <Navbar></Navbar>
<div>
<Home></Home>

<div className="mx-12">
  
<About></About>
<MySkill></MySkill>
<MyProject></MyProject>
<MyExperience></MyExperience>
<ContactUs></ContactUs>
</div>
</div>
<Footer></Footer>
   </div>
  )
}

export default App
