import React, { Component } from "react";
import "./App.css";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";


class App extends Component {
  render() {
    return (
      <div style={{ height: "400px", position: "relative" }}>
        <Layout style={{ background: 'url(https://images.pexels.com/photos/1328891/pexels-photo-1328891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500) bottom,center / cover'}}>
          <Header transparent title="Menu" style={{ color: "white" }}>
            {/* <Navigation>
              <a href="/">Home</a>
              <a href="/">Resume</a>
              <a href="/">Gallery</a>
              <a href="/">Blog</a>
            </Navigation> */}
          </Header>
          <Drawer title="Title" md-3>
            <Navigation>
              <a href="./home.js">Home</a>
              <a href="./Resume">Resume</a>
              <a href="./Gallery">Gallery</a>
              <a href="./Blog">Blog</a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
