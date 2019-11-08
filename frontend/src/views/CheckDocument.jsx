import React from "react";
import { Container } from "shards-react";

class CheckDocument extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "title"
    };
  }
  render() {
    return <Container>{this.state.title}</Container>;
  }
}

export default CheckDocument;
