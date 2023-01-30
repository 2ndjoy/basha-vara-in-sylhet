import logo from "./logo.svg";
import "./App.css";
import { toast, Toaster } from "react-hot-toast";
import { FaBeer } from "react-icons/fa";
function App() {
  const handleToast = () => {
    toast.success("Clicked");
  };
  return (
    <div className="text-xl text-red-400">
      This is app{" "}
      <button onClick={handleToast} className="btn btn-primary">
        <FaBeer />
      </button>
      <Toaster />
    </div>
  );
}

export default App;
