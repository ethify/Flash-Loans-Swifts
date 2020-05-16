import React from "react";
import { BrowserRouter as Router, Link, HashRouter } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Container,
  Row,
  Col,
} from "shards-react";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h2 className="Heading">Flash Zaps</h2>
          <center>
            {" "}
            <div className="Cards">
              <Card className="Card">
                <CardHeader className="CardHeader">FZap</CardHeader>

                <CardBody>
                  <CardTitle className="CardTitle">FZap Name</CardTitle>
                  <p className="CardDescription">FZap Description</p>
                  <CardTitle clasName="CardTitle2">DevAddress</CardTitle>
                  <div>
                    <div className="Votes1">
                      <span clasName="UpVote">&uarr;</span>
                    </div>
                    <span clasName="UpNumber">4</span>

                    <div className="Votes2">
                      <span clasName="DownVote">&darr;</span>
                    </div>
                    <span clasName="DownNumber">1</span>
                  </div>
                  <br />
                  <Button clasName="UseButton">
                    {" "}
                    <Link className="Link" href="#" to="/fzap-name">
                      Use This
                    </Link>
                  </Button>
                </CardBody>
              </Card>
            </div>
          </center>
        </div>
      </HashRouter>
    );
  }
}
