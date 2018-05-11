/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/ReduxSimpleStarter/src/components/video-list.js
 */
import React, { Component } from "react";
import { Grid, Image, Menu, Header } from "semantic-ui-react";

export default class VideoList extends Component {
  handleItemClick = (e, { name }) => {
    let selectedVideo = name;
    this.props.onVideoSelect(selectedVideo);
  };

  render() {
    let { videos } = this.props;
    if (!videos || videos.length === 0) {
      return <div />;
    }
    let items = videos.map(video => {
      return (
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={video.snippet.thumbnails.medium.url} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Menu fluid vertical>
              <Menu.Item
                name={video}
                active={this.props.selectedVideo === video}
                onClick={this.handleItemClick}
              >
                <Header as="h4" textAlign="left">
                  {video.snippet.title}
                </Header>
                <p align="left">{video.snippet.description}</p>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      );
    });

    return <Grid celled>{items}</Grid>;
  }
}
