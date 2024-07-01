import Aboutus from "./components/Aboutus";
import ContactForm from "./components/ContactForm";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Software from "./components/Software";
import Projects3 from "./components/Projects3";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-500">
        <div className="fixed top-0 -z-10 h-full w-full">

        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="container mx-auto  ">
          <Navbar />
        </div>
        <Hero/>
        <Aboutus/>
        <Software/>
        {/* <Projects/> */}
        <Projects3/>
        {/* <Form/> */}
        <ContactForm/>
      </div>
      
    
  );
}

export default App;
