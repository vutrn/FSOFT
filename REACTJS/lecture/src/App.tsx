import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";
import PrivateRouter from "./pages/PrivateRouter";

export const AuthContext = createContext({} as any);

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />

          <Route path='/' element={<PrivateRouter isLogin={isLogin} />}>
            <Route path='/users' element={<Users />} />
            <Route path='/users/:userId' element={<UserDetail />} />
          </Route>

          <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>{" "}
    </AuthContext.Provider>
  );
}

export default App;

// jsx - JavaScript XML

// function component vs class component
// class component use state management
// function component use hooks

// setState is async
// callback is closure
// no re-rendering when prev value = new value

// useEffect -> side effect (fetch API, timer, DOM event scroll, key up)

// mount -> update -> unmount
// mount: first time component appear on the screen
// unmount: component disappear from the screen

// mount vs load vs update vs render
// render = update : every time React execute the function component
// load: when all resources (JS, CSS, images) are loaded

// useRef to keep track of mutable values that do not cause re-renders when updated
// also used to reference DOM elements directly

// memo / React.memo : HOC - higher order component
// useCallback used to memoize functions
// useMemo used to memoize values

// STATE MANAGEMENT

/*
  local stotage
  context API
  libs (Zustand vs Redux)
*/
