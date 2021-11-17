import './App.css';
import './styles/variables.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Todo from './components/Pages/Todo/Todo'
import Sidebar from './components/SideBar'

function App() {
  return (
    <div className="App">
    <Sidebar />
      <Routes>
       {/* <Route element={<Sidebar />}/> */}
        <Route path="/" element={<Home message="you're on the home page now"/>}/>
        <Route path="test" element={<Home message="You're on the test page!! Joe biden"/>}/>
        <Route path="calendar" element={<Home message="You're on the calendar page :)"/>}/>
        <Route path="todo" element={<Todo/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
