import './App.scss'
import { Header } from "./components/Partials/Header/Header.jsx";
import { AppRouterMobil } from './components/AppRouter/AppRouterMobil.jsx';
import { AppRouterDesktop } from './components/AppRouter/AppRouterDesktop.jsx';
import { Footer } from './components/Partials/Footer/Footer.jsx';
import "./style/index.css";

function App() {
  const isMobile = window.innerWidth < 768;
  

  return (
    <>
    
    <Header></Header>
    {isMobile ? <AppRouterMobil></AppRouterMobil> : <AppRouterDesktop></AppRouterDesktop>}
      {/* <AppRouter></AppRouter> */}
    <Footer></Footer>
    </>
  )
}

export default App;
