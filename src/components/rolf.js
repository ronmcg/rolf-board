import React, { useState } from "react";
import { Grid, Image, Header, Icon, Container } from "semantic-ui-react";

const Rolf = () => {
  const rolfs = [
    {
      label: "Yeah buddy 1",
      clip: "yeah_buddy1"
    },
    {
      label: "Yeah buddy 2",
      clip: "yeah_buddy2"
    },
    {
      label: "Yeah buddy 3",
      clip: "yeah_buddy3"
    },
    {
      label: "Yeah buddy 4",
      clip: "yeah_buddy4"
    },
    {
      label: "Yeah buddy 5",
      clip: "yeah_buddy5"
    },
    {
      label: "Bees 1",
      clip: "bees1"
    },
    {
      label: "Bees 2",
      clip: "bees2"
    },
    {
      label: "Question 1",
      clip: "question1"
    },
    {
      label: "Working from home 1",
      clip: "working_home1"
    },
    {
      label: "Working from home 2",
      clip: "working_home2"
    }
  ];

  const audio = new Audio();
  audio.addEventListener("ended", event => {
    setSound(false);
  });
  const playClip = clip => {
    console.log(clip);
    audio.pause();
    audio.currentTime = 0;
    audio.src = "/assets/" + clip + ".mp3";
    audio.play();
    setSound(true);
  };
  const containerStyle = {
    marginTop: "30px"
  };
  const rolfStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    marginTop: "20px",
    marginBottom: "90px",
    marginLeft: "10px",
    marginRight: "10px"
  };

  const [sound, setSound] = useState(false);
  return (
    <Container style={containerStyle}>
      <Grid.Column>
        <Header as="h1" textAlign="center">
          Click The Rolf &nbsp;
          <Icon name={sound ? "volume up" : "volume off"} />
        </Header>
      </Grid.Column>
      <Grid>
        {rolfs.map((quote, index) => {
          return (
            <Grid.Column key={index} style={rolfStyle}>
              <Image
                onClick={() => playClip(quote.clip)}
                src="/assets/jay_face.png"
                size="small"
                centered
              />
              <Header as="h3" textAlign="center">
                {quote.label}
              </Header>
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Rolf;
