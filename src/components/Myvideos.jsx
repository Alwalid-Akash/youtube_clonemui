import React from "react";

const MyVideos = ({ videos }) => {
  console.log(videos);
  return (
    <div>
      {/* {videos.map((video, index) => (
        <div key={index}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default MyVideos;
