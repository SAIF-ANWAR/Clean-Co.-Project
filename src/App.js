import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes/publicRoute";



function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
          }
        </Routes>

      </Navbar>

    </div>
  );
}

export default App;
