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
  CardFooter
} from "shards-react";
import GridLoader from "react-spinners/GridLoader";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

import makeBlockie from "ethereum-blockies-base64";

import { getShortAddress } from './services/utils'

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

  async downVoteSwift(swiftID) {
    const newSwifts = await downVoteSwift(swiftID);
    this.setState({ swift: newSwifts });
  }

  async upVoteSwift(swiftID) {
    const newSwifts = await upVoteSwift(swiftID);
    this.setState({ swift: newSwifts });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Container className="main-container">
            <string>
              <center>
                <h2 className="Heading">All Swifts</h2>
              </center>
            </string>{" "}
            <div className="Cards">
              <Row>
                {this.state.swifts ? (
                  this.state.swifts.map((swift) => (
                    <div>
                      <Col sm="12" md="4" lg="3">
                        <Card className="Card">
                          <center>
                            <CardBody className="CardBody">
                              <CardTitle className="CardTitle">
                                {swift.name}
                              </CardTitle>
                              <p className="CardDescription">
                                {swift.description}
                              </p>
                              <br />
                              Made By
                              {swift.rewardFeeAddress ? (
                              <div>
                                <img
                                  src={makeBlockie(swift.rewardFeeAddress)}
                                  alt="address blockie"
                                  className="address-blockie"
                                  width="15"
                                />
                                <span className="short-address">
                                  {getShortAddress(swift.rewardFeeAddress)}
                                </span>
                              </div>) : (<div>
                                <img
                                  src={makeBlockie('0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b')}
                                  alt="address blockie"
                                  className="address-blockie"
                                  width="15"
                                />
                                <span className="short-address">
                                  {getShortAddress('0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b')}
                                </span>
                              </div>)}
                              <br />
                              <div>
                                <div className="Votes1">
                                  <button
                                    onClick={e => this.upVoteSwift(swift.id)}
                                  >
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                  </button>
                                </div>
                                <span className="UpNumber">
                                  {swift.upVotes}
                                </span>

                                <div className="Votes2">
                                  <button
                                    onClick={e => this.downVoteSwift(swift.id)}
                                  >
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                  </button>
                                </div>
                                <span className="DownNumber">
                                  {swift.downVotes}
                                </span>
                              </div>
                              <br />
                            </CardBody>
                            <CardFooter className="CardFooter">
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
                                Use This &rarr;
                              </Button>
                            </CardFooter>
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
                          color={"#00b8d8"}
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
