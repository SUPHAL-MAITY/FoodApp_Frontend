import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { Dropdown } from "flowbite-react";
import useAuth from "../context/Auth";

const AppBar = () => {
  const { auth, AuthSet } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/api/user/logout`
      );
      console.log(data);
      if (data) {
        AuthSet(null, "");
        localStorage.removeItem("auth");
        alert("User logged out  successfully");
      }

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full h-[64px] bg-gray-100 flex  justify-between items-center   bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500  shadow-lg  text-white">
      {/* left side */}
      <div className=" ml-4 font-semibold  font-serif text-base text-xl">
        <Link to="/">Foodie Bar</Link>
      </div>

      

      {/* right side */}


      <div className="mr-4 flex items-center font-serif ">
              <Link to="/cart" className="mr-4">
                <i className="fa-solid fa-cart-shopping "></i>
              </Link>

        
         
            
              {!auth.token ? (
                <Link to="/login">
                  <span className="mr-4">Login</span>
                </Link>
              ) : (
                <Link onClick={handleLogout} to="">
                  <span className="mr-4">Log out</span>
                </Link>
              )}
           
            {!auth?.token && (
              
                <Link to="/signup">
                  <span className="mr-4">SignUp</span>
                </Link>
              
            )}
          
        


        <Dropdown
          label="Dropdown button"
          renderTrigger={() => (
            <span>
              {auth?.user && (
                <div className="m-2  relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-slate-300 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300 ">
                    {auth?.user?.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </span>
          )}
          dismissOnClick={false}
        >
          <Dropdown.Item as={Link} to="/details">
            Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/update-profile">
            Update Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/update-password">
            Update Password
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/admin/dashboard">
            Admin Dashboard
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/restaurant">
            Restaurant
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/add-restaurant">
            Add Restuarant
          </Dropdown.Item>
        </Dropdown>

      </div>
    </div>
  );
};

export default AppBar;
