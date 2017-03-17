import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItem = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video = {video}/>;
  });

  return (
    <ul className="list-group col-sm-5">
      {videoItem}
    </ul>
  );
};

export default VideoList;