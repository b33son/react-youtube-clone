/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/ReduxSimpleStarter/src/components/video-detail.js
 */

import React from "react";
import { Embed, Grid } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
  if (!video) return <div />;

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column>
          <Embed
            id={videoId}
            placeholder={video.snippet.thumbnails.medium.url}
            source="youtube"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default VideoDetail;
