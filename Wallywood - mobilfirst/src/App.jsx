import './App.scss'
import { PageWrapper } from './components/Wrapper/PageWrapper.jsx';
import { Header } from "./components/Partials/Header/Header.jsx";
import { AppRouterMobil } from './components/AppRouter/AppRouterMobil.jsx';
import { AppRouterDesktop } from './components/AppRouter/AppRouterDesktop.jsx';
import { Footer } from './components/Partials/Footer/Footer.jsx';
import "./style/index.css";

function App() {
  const isMobile = window.innerWidth < 768;
  

  return (
    <>
   <PageWrapper>
      <Header></Header>
        {isMobile ? <AppRouterMobil></AppRouterMobil> : <AppRouterDesktop></AppRouterDesktop>}
      <Footer></Footer>
   </PageWrapper>
   
    </>
  )
}

export default App;
