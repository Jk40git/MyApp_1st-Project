
import {SignUp, Login} from './pages';
import { Routes,Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path={'signup'} element={<SignUp/>}/>
      </Routes>
    </div>
  )
}
