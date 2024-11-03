import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import{Box} from '@mui/material';
import{ Navber, Feed, VideoDetail, ScearchFeed, ChannelDetails} from "./components";

  

const App = () =>{
  return(
  
<BrowserRouter>
  <Box  sx= {{ backgroundColor: '#000', height: '20vh', width:'auto'}}> 
    <Navber/>  
    <Routes>
      <Route path="/"exact element={<Feed/>} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/Channel/:id" element={<ChannelDetails />} />
      <Route path="/scearch/:scearchTerm" element={<ScearchFeed />} />
      
    </Routes>

 </Box>

</BrowserRouter> 
)};

export default App;