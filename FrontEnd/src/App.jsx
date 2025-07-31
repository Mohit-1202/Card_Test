import './App.css'
import CardDesign from './Components/CardDesign.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import { useUser } from './Context/UserContext.jsx';

function App() {
    const { setUser } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const BASE_URL = "https://card-test-18sp.onrender.com";

        const res = await fetch(`${BASE_URL}/api/users/`); 
        const data = await res.json();
        setUser(data.users);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);
  return (
    <>
       <CardDesign/>
    </>
  )
}

export default App
