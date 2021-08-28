import React, { Component } from "react";
import dashjs from "dashjs";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.classRef = React.createRef(null);
    this.src = props.src;
  }

  componentDidMount() {
    const video = this.classRef.current;
    const player = dashjs.MediaPlayer().create();
    player.initialize();

    player.updateSettings({
      debug: {
        logLevel: dashjs.Debug.LOG_LEVEL_NONE,
      },
      streaming: {
        scheduleWhilePaused: false,
        buffer: {
          fastSwitchEnabled: true,
        },
      },
    });

    player.setAutoPlay(true);
    player.attachView(video);
    player.attachSource(this.src);
  }

  render() {
    return (
      <video
        style={{ width: "100%", heigth: "100%", margin: "20px 0" }}
        ref={this.classRef}
        controls
        muted
      />
    );
  }
}
