import React, { Component } from "react";
import axios from "axios";
import { Alert } from "reactstrap";

const { REACT_APP_YOUTUBE_KEY } = process.env;

const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=qualitytraining&type=video&key=${REACT_APP_YOUTUBE_KEY}`;

class Video_List extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(baseUrl).then(res => {
      this.setState({
        data: res.data.items
      });
    });
  }

  render() {
    let videolist = this.state.data.map((video, i) => {
      //   console.log(video.snippet.description);
      let searchUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
      return (
        <div key={i}>
          <iframe
            title={video.snippet.description}
            src={searchUrl}
            height="315"
            width="560"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      );
    });
    return (
      <div>
        <Alert color="primary">
          This is a set of recommended training videos!
        </Alert>
        <iframe
          title="QualitySelectedVideo"
          src="https://www.youtube.com/embed/hMfPCdF07hA"
          height="315"
          width="560"
          frameBorder="0"
          allowFullScreen
        />
        {videolist}
      </div>
    );
  }
}

export default Video_List;
