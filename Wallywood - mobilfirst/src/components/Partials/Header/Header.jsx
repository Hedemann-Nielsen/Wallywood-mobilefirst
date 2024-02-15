import { Burgermenu } from "../Navigation/Burgermenu.jsx";
import { Desktopmenu } from "../Navigation/Desktopmenu.jsx";
import { NavLink } from "react-router-dom";


export const Header = () => {


  return (
    <header className=" m-auto flex justify-between mb-2 w-11/12 border-b-2 border-[#5C1F06]">
        <NavLink to="/" className="no-underline">
          <h1 className="font-black pt-6 text-3xl md:text-4xl uppercase">Wallywood</h1>
        </NavLink>
      <div>
        <Burgermenu></Burgermenu>
        <Desktopmenu></Desktopmenu>
      </div>
   
    </header>
    
  )
}
