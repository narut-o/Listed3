import ReactDOM from "react-dom/client";
import Dashboard from './pages/dashboard';

const App = () => {
  return <div>
    <Dashboard/>
  </div>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(<App />);
