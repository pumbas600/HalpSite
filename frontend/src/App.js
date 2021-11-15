import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/test" element={<Home message="You're on the test page!"/>}/>
      </Routes>
    </div>
  );
}

export default App;
