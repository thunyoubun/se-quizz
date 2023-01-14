import React, { Component } from "react";

export default class Footer extends React.Component {
  state = {
    curYear: "",
  };

  componentDidMount() {
    this.getCurYear();
  }

  getCurYear = () => {
    var today = new Date(),
      curYear = today.getFullYear();

    this.setState({ curYear });
  };
  render() {
    return (
      <div className="   w-full bottom-0   ">
        <div className=" max-w-screen h-[56px] flex justify-center align-middle ">
          <div className="p-4  w-full h-full text-center text-black">
            <h1>
              ©{this.state.curYear} Designed and Developed by{" "}
              <span className=" font-medium">Switch</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
