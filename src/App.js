import "./App.css";
import Nav from "./components/Nav"; 
import Footer from "./components/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SerchPage from "./pages/SearchPage";

const Layout = () => {
  return(
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SerchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
