import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
    const [mode, setMode] = useState("light"); //setting default false

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "black";
            showAlert("Dark Mode Enabled ", "success");
            document.title = "Text Tool- Dark Mode";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light Mode Enabled ", "success");
            document.title = "Text Tool- Light Mode";
        }
    };
  return ( 
    <>
      <Router>
        <Navbar title="Texttools" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About mode={mode} />}> </Route>
          <Route path='/' element={ <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} /> }>  </Route>
          </Routes>
      </Router>
      </>
    );
}

export default App;