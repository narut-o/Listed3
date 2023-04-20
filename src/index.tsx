import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Login from "./pages/login";

const App = () => {
  return (
   <>
    
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login/>} />
      <Route  path="/dashboard" element={<Dashboard/>} />  
    
    </Routes>

    </BrowserRouter>
     </>
  )
 
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(<App />);
