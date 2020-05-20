import React from "react";
import {
  BrowserRouter as Router,
  Link,
  HashRouter,
  useHistory,
} from "react-router-dom";

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

import {
  getSwifts,
  getSpace,
  setSwifts,
  defaultAddress,
  upVoteSwift,
  downVoteSwift,
} from "./services";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swifts: null,
    };

    this.downVoteSwift = this.downVoteSwift.bind(this);
    this.upVoteSwift = this.upVoteSwift.bind(this);
  }

  async componentDidMount() {
    await getSpace();
    let swiftList = await getSwifts();

    console.log("swifts", swiftList);

    if (swiftList === undefined) {
      swiftList = [];
      this.setState({ swifts: swiftList });
    } else {
      this.setState({ swifts: swiftList });
    }
  }

  async downVoteSwift(e) {
    const newSwifts = await downVoteSwift(e.target.value);
    this.setState({ swift: newSwifts });
  }

  async upVoteSwift(e) {
    const newSwifts = await upVoteSwift(e.target.value);
    this.setState({ swift: newSwifts });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Container className="main-container">
            <string>
              <center>
                <h4>Flash Zaps</h4>
              </center>
            </string>{" "}
            <div className="Cards">
              <Row>
                {this.state.swifts ? (
                  this.state.swifts.map((swift) => (
                    <div>
                      <Col sm="12" md="4" lg="3">
                        <Card className="Card">
                          <CardHeader className="CardHeader">FZap</CardHeader>
                          <center>
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
                                  <button
                                    value={swift.id}
                                    className="UpVote"
                                    onClick={this.upVoteSwift}
                                  >
                                    &uarr;
                                  </button>
                                </div>
                                <span className="UpNumber">
                                  {swift.upVotes}
                                </span>

                                <div className="Votes2">
                                  <button
                                    value={swift.id}
                                    className="DownVote"
                                    onClick={this.downVoteSwift}
                                  >
                                    &darr;
                                  </button>
                                </div>
                                <span className="DownNumber">
                                  {swift.downVotes}
                                </span>
                              </div>
                              <br />
                              <Button
                                outline
                                pill
                                theme="info"
                                className="UseButton"
                                name={swift.id}
                                onClick={(e) => {
                                  this.props.history.push(
                                    "/swift/" + e.target.name
                                  );
                                }}
                              >
                                Use This
                              </Button>
                            </CardBody>
                          </center>
                        </Card>
                      </Col>
                    </div>
                  ))
                ) : (
                  <Col>
                    <center>
                      {" "}
                      <GridLoader
                        size={10}
                        color={"#00FFFF"}
                        loading={this.state.buyingPoolToken}
                      />
                    </center>
                  </Col>
                )}{" "}
              </Row>
            </div>
          </Container>
        </div>
      </HashRouter>
    );
  }
}
