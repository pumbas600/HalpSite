import './App.css';
import './styles/variables.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Todo from './components/Pages/Todo/Todo'
import Month from './components/Pages/calendar/Month';
import Calendar from './components/Pages/calendar/Calendar';

function App() {
  return (
    <div className="App">
    {/* <Sidebar /> */}
      <Routes>
       {/* <Route element={<Sidebar />}/> */}
        <Route path="/" element={<Home message="you're on the home page now"/>}/>
        <Route path="test" element={<Home message="You're on the test page!! Joe biden hee hee"/>}/>
        <Route path="calendar" element={<Calendar />}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="cal" element={ <Month date={new Date()} />} />
        
      </Routes>
    </div>
  );
}

export default App;
