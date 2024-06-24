// import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Chatroom from "./components/Chatroom";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
      <div className={App}>
          <TopBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chatroom" element={<Chatroom/>}/>
          </Routes>
          <HelloWorld/>
    </div>
  );
}

export default App;
