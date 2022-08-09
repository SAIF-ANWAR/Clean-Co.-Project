import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes/publicRoute";
// import { PrivateRoutes } from "./routes/PrivateRoutes";
import Services from "./pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import About from "./pages/About";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";



function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
          }
          {/* <Route path="/services" element={<PrivateRoute>
            <Services />
          </PrivateRoute>} /> */}
          {/* <Route element={<PrivateRoute />}>
            {
              PrivateRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
            }
          </Route> */}
          <Route element={<PrivateRoute />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
          </Route>
          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path="add-admin" element={<AddAdmin></AddAdmin>}></Route>
              <Route path="add-service" element={<AddService></AddService>}></Route>
            </Route>
          </Route>
        </Routes>

      </Navbar>

    </div>
  );
}

export default App;
