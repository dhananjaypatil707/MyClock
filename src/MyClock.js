import React from "react";

class MyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mydate: new Date()
    }; //INITIALIZE THE REACT STATE
  }
  componentDidMount() {
    setInterval(() => this.changeDate(), 1000);
  }

  componentWillUnmount() {}

  changeDate() {
    this.setState({ mydate: new Date() });
  }
  render() {
    return <p>Current time:{this.state.mydate.toLocaleTimeString()} </p>;
  }
}

export default MyClock;

