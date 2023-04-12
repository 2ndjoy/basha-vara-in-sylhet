import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="bg-slate-100">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
