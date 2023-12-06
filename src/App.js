import './styles/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Result } from "./components/Result";
import { Auth } from "./components/Auth";
import { Main } from "./components/Main";
import { AuthError } from "./components/AuthError";
import { Search } from "./components/Search";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ResultProvider } from "./context/resultProvider";

function App() { const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route
              path="/auth"
              element={!isAuth ? <Auth isAuth={isAuth} setIsAuth={setIsAuth}/> : <Navigate to="/" />}
          />
          <Route element={isAuth ? <Outlet/> : <Navigate to="/auth"/>}>
            <Route
                path="/search"
                element={
                  <ResultProvider>
                    <Search/>
                  </ResultProvider>
                }
            />
            <Route
                path="/result"
                element={
                  <ResultProvider>
                    <Result/>
                  </ResultProvider>
                }
            />
          </Route>
          <Route path="/error" element={<AuthError/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
