import { Burgermenu } from "../Navigation/Burgermenu.jsx";
import { Desktopmenu } from "../Navigation/Desktopmenu.jsx";
import { NavLink } from "react-router-dom";


export const Header = () => {


  return (
    <header className="w-screen flex justify-between">
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
