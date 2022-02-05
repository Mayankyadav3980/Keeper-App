import React, { useState } from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import { Link } from "react-router-dom";

function Header() {
  const [islogin, setislogin] = useState(false);
  return (
    <header>
     
      <h1> <HighlightIcon /> Keeper</h1>
      
     { islogin ?  (<Link to="/"> <h4 onClick={() => {setislogin(false)}}>Logout</h4> </Link>) : (<Link to="/login" > <h4 onClick={() => {setislogin(true)}}>Login</h4> </Link>) }
     <Link to="/signup"><h4 > Sign up</h4> </Link>
     <Link to="/"><h4 > Home </h4> </Link>
      
    </header>
  );
}

export default Header;
