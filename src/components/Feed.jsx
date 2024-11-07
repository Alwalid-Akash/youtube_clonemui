import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from "../images/fetchFromAPI";
import { Sidebar, Myvideos } from "./";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching data:', error));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box 
        sx={{ 
          height: { sx: 'auto', md: '92vh' }, 
          borderRight: '1px solid #3d3d3d', 
          px: { sx: 0, md: 2 },
          backgroundColor: 'black'
        }} >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          copyright 2024
        </Typography>
      </Box>

      <Box>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'red', marginLeft: '5px' }}>
          {selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
        </Typography>
        <Myvideos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
