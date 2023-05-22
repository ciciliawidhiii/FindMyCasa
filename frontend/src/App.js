import Landing from "./pages/Landing"
import Error from "./pages/Error"
import Main from "./pages/Main"
import {
  BrowserRouter,
  Routes,
  Route,
} 
from "react-router-dom";

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Landing/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/Main' element={<Main/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
