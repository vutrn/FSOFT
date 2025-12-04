import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PhotoPage from './pages/PhotoPage';
import UserDetailsPage from './pages/UserDetailsPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:userId" element={<UserDetailsPage />} />
        <Route path="/photos" element={<PhotoPage />} />
      </Routes>
    </>
  );
}

export default App;
