import React from "react";  
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import {Search} from "@mui/icons-material";

const ScearchBar = () =>{
  return(
    <Paper component="from"
    onsubmit= { () => { } }
    sx={{
      borderRadius:20,
      border:' 1px solid #e3e3e3',
      paddingLeft:2,
      boxShadow:'none',
      marginRight:{sm: 5}
    }}  
    >
      <input className="search-bar"
      placeholder="Search..."
      value=""
      onChange={ () => {} }>       
      </input>
      <IconButton type ="submit" 
      sx={{padding:'10px',color:'red'}}>

        <Search/>
      </IconButton>

    </Paper>
  )
}
export default ScearchBar;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IconButton, Paper } from "@mui/material";
// import { Search } from "@mui/icons-material";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm) {
//       navigate(`/search/${searchTerm}`);
//     }
//   };

//   return (
//     <Paper 
//       component="form" 
//       onSubmit={handleSubmit} 
//       sx={{ 
//         borderRadius: 20, 
//         border: '1px solid #e3e3e3', 
//         paddingLeft: 2, 
//         boxShadow: 'none', 
//         marginRight: { sm: 5 } 
//       }}
//     >
//       <input 
//         className="search-bar" 
//         placeholder="Search..." 
//         value={searchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)} 
//       />
//       <IconButton 
//         type="submit" 
//         sx={{ padding: '10px', color: 'red' }}
//       >
//         <Search />
//       </IconButton>
//     </Paper>
//   );
// };

// export default ScearchBar;
