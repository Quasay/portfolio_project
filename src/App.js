import React, { Component } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      foo: "Bar",
    };
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ resumeData: data });
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  // This lifecycle methods immediately after the component output has been rendered.
  componentDidMount() {
    this.getResumeData();
    console.log("This is a test yeet.");
  }

  render() {
    return (
      <div>
        <h2>Hi, part 2</h2>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
  }
}

export default App;
