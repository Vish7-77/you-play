import React, { Component } from "react";
import Search from "./Comp/Search";
import Api from "./Comp/Api";
import VideoList from "./Comp/VideoList";
import Mod from "./Comp/Mod";
import Spinner from "./Comp/Spinner";

export default class App extends Component {
  state = {
    videos: [],
    show: "block",
    loading: false,
    show1: "block",
  };

  handlesubmit = async (term) => {
    this.setState({ loading: true, show: "none" });
    const resp = await Api.get("/search", { params: { q: term } });
    this.setState({ videos: resp.data.items, loading: false, show1: "none" });
    
  };

  render() {
    return (
      <>
        <Search handleFormSubmit={this.handlesubmit} />
        <div
          className="container"
          style={{
            width: "100px",
            margin: "auto",
            height: "100px",
            marginTop: "54px",
            display: `${this.state.show1}`,
          }}
        >
          {this.state.loading && <Spinner />}
        </div>
        <div style={{ display: `${this.state.show}` }}>
          <Mod />
        </div>

        <div className="container">
          <div className="row">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </>
    );
  }
}
