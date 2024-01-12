import MainPage from './components/MainPage'
import UserInfo from './components/UserInfo';
import LandingPage from './components/LandingPage';
import Search from './components/Search';
import InfoContextProvider from './personal-info-context'
import Search_example from './components/Search_Example';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <InfoContextProvider>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
          <Route path="/info" element={<UserInfo/>}/>
          <Route path="/nutrition" element={<Search_example/>}/>
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </Router>
    </InfoContextProvider>
  
  )
}

export default App
