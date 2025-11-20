import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/login");
    // useNavigate('/login')
  };

  return (
    <div>
      <p>Home</p>
      {/* c1 */}
      <button className='border' onClick={handleLogin}>
        Login
      </button>
      {/* c2 */}
      <Link to='/login'>Login (by Link)</Link>
    </div>
  );
};

export default Home;
