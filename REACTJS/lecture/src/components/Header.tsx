import { memo, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../App";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <>
      <div className='flex gap-3 p-3 bg-gray-200 mb-5'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>

        {!user.token && <NavLink to='/login'>Login</NavLink>}
        {user.token && <span>{user.username}</span>}
        {user.token && <button onClick={handleLogout}>Log out</button>}
      </div>
    </>
  );
};

export default memo(Header);

// memo function re-render only if props or state change
