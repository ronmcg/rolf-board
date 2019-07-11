import React, { useState } from "react";
import { Grid, Image, Header, Icon, Container } from "semantic-ui-react";

const Rolf = () => {
  const rolfs = {
    bees: ["bees1", "bees2"],
    yeah_buddy: [
      "yeah_buddy1",
      "yeah_buddy2",
      "yeah_buddy3",
      "yeah_buddy4",
      "yeah_buddy5"
    ],
    question: ["question1"],
    working_home: ["working_home1", "working_home2"]
  };

  const rolfs2 = [
    {
      label: "Yeah buddy 1",
      clip: "yeah_buddy_1"
    },
    {
      label: "Yeah buddy 2",
      clip: "yeah_buddy_2"
    },
    {
      label: "Yeah buddy 3",
      clip: "yeah_buddy_3"
    },
    {
      label: "Yeah buddy 4",
      clip: "yeah_buddy_4"
    },
    {
      label: "Yeah buddy 5",
      clip: "yeah_buddy_5"
    }
  ];

  const audio = new Audio();
  audio.addEventListener("ended", event => {
    setSound(false);
  });
  const playClip = clip => {
    const clips = rolfs[clip];
    const random = clips[Math.floor(Math.random() * clips.length)];
    audio.pause();
    audio.currentTime = 0;
    audio.src = "/assets/" + random + ".mp3";
    audio.play();
    setSound(true);
  };

  const style = {
    width: "100px",
    height: "100px",
    cursor: "pointer"
  };

  const [sound, setSound] = useState(false);
  return (
    <Container>
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h3" textAlign="center">
            Click The Rolf &nbsp;
            <Icon name={sound ? "volume up" : "volume off"} centered />
          </Header>
        </Grid.Column>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Image
              style={style}
              onClick={() => playClip("yeah_buddy")}
              src="/assets/jay_face.png"
              size="mini"
              centered
            />
            <Header as="h3" textAlign="center">
              Yeah Buddy
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Image
              style={style}
              onClick={() => playClip("bees")}
              src="/assets/jay_face.png"
              size="mini"
              centered
            />
            <Header as="h3" textAlign="center">
              Bees
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Image
              style={style}
              onClick={() => playClip("question")}
              src="/assets/jay_face.png"
              size="mini"
              centered
            />
            <Header as="h3" textAlign="center">
              Question for you
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Image
              style={style}
              onClick={() => playClip("working_home")}
              src="/assets/jay_face.png"
              size="mini"
              centered
            />
            <Header as="h3" textAlign="center">
              Working from home
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Rolf;
