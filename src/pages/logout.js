// Logout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to a different page

const Logout = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    // Clear user data from localStorage or cookies (adjust based on your storage method)
    localStorage.removeItem('authToken'); // If you're storing a token in localStorage
    sessionStorage.removeItem('authToken'); // If you're using sessionStorage

    // Redirect to the login or home page
    navigate('/login'); // Redirect to the login page or home
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
