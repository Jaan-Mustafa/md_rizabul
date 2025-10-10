import Image from "next/image";
import Desc from "./components/description";
import TechSkill from "./components/Tech_Skill";
import Achievement from "./components/Achievement";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <>
    <div  className="text-black">
   
      <div>
       This is my home page 
      </div>
      <Desc/>
      <br />
      <div></div>
      <TechSkill/>
      <div>
        <br />
      </div>
      <Achievement/>
      <div><br /></div>
      <Projects/>
      <div><br /></div>
      <Contacts/>

    </div>


    </>
  
  );
}
