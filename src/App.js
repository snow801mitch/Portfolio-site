import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import main from "./components/main";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div style={{ height: "450px", position: "relative" }}>
        <Layout
          style={{
            background:
              "url(https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500) center / cover"}}>
          <Header transparent title="Menu" style={{ color: "white" }}>
            <Navigation>
              <Link to="/Home">Home</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/Gallery">Gallery</Link>
              <Link to="/Blog">Blog</Link>
            </Navigation>
          </Header>
          <Drawer title="Explore">
            <Navigation>
            <Link to="/Home">Home</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/Gallery">Gallery</Link>
              <Link to="/Blog">Blog</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
