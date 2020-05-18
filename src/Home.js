import React from "react";
import { BrowserRouter as Router, Link, HashRouter, useHistory } from "react-router-dom";

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
import GridLoader from "react-spinners/GridLoader";

import "./Home.css";

import { getSwifts, getSpace, setSwifts, defaultAddress, upVoteSwift, downVoteSwift } from "./services";


export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      swifts: null,
    };

    this.downVoteSwift = this.downVoteSwift.bind(this)
    this.upVoteSwift = this.upVoteSwift.bind(this)
  }

  async componentDidMount() {
    await getSpace();
    let swiftList = await getSwifts();

    console.log("swifts", swiftList);

    if (swiftList === undefined) {
      swiftList = []
      this.setState({ swifts: swiftList });
    } else {
      this.setState({ swifts: swiftList });
    }
  }

  async downVoteSwift(e) {
    const newSwifts = await downVoteSwift(e.target.value)
    this.setState({swift: newSwifts})
  }

  async upVoteSwift(e) {
    const newSwifts = await upVoteSwift(e.target.value)
    this.setState({swift: newSwifts})
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Container className="main-container">
            <string>
              <h4>Flash Zaps</h4>
            </string>
            <center>
              {" "}
              <div className="Cards">
                {
                  this.state.swifts ? (
                    this.state.swifts.map((swift) =>
                      <div>
                        <Card className="Card">
                          <CardHeader className="CardHeader">FZap</CardHeader>
                          <CardBody>
                            <CardTitle className="CardTitle">
                              {swift.name}
                            </CardTitle>
                            <p className="CardDescription">
                              {swift.description}
                            </p>
                            <CardTitle className="CardTitle2">
                              DevAddress
                                  </CardTitle>
                            <div>
                              <div className="Votes1">
                                <Button value={swift.id} className="UpVote" onClick={this.upVoteSwift}>&uarr;</Button>
                              </div>
                  <span className="UpNumber">{swift.upVotes}</span>

                              <div className="Votes2">
                                <Button value={swift.id} className="DownVote" onClick={this.downVoteSwift}>&darr;</Button>
                              </div>
                              <span className="DownNumber">{swift.downVotes}</span>
                            </div>
                            <br />
                            <Button className="UseButton" name={swift.id} onClick={(e) => {
                              this.props.history.push("/swift/" + e.target.name)
                            }}>
                              Use This
                                </Button>
                          </CardBody>
                        </Card>
                      </div>
                    )
                  ) : (
                      <Col>
                        <center> <GridLoader
                          size={10}
                          color={"#9c24c0"}
                          loading={this.state.buyingPoolToken}
                        /></center>
                      </Col>
                    )
                }
              </div>
            </center>
          </Container>
        </div>
      </HashRouter>
    );
  }
}
