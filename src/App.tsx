import Router from "./routes";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="bg-background1 mx-auto">
      {/* <Header onThemeToggle={toggleTheme} /> */}
      <ToastContainer />
      <div className="mx-3 mb-3">
        <Router />
      </div>
    </main>
  );
}

export default App;
