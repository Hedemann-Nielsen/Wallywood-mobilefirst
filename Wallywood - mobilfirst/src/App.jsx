import './App.scss'
import { Header } from "./components/Partials/Header/Header.jsx";
import { AppRouter } from "./components/AppRouter/AppRouter.jsx"; 
import { Footer } from './components/Partials/Footer/Footer.jsx';

function App() {
  

  return (
    <>
    
    <Header></Header>
      <AppRouter></AppRouter>
    <Footer></Footer>
    </>
  )
}

export default App;
