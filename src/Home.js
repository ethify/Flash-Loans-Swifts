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

import { getSwifts, getSpace } from "./services";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swifts: null,
    };
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

  render() {
    return (
      <HashRouter>
        <div>
          <center>
            <Container className="main-container">
              <string>
                <h4>Flash Zaps</h4>
              </string>{" "}
              <div className="Cards">
                <Row>
                  {this.state.swifts ? (
                    this.state.swifts.map((swift) => (
                      <div>
                        <Col sm="12" md="4" lg="3">
                          <Card className="Card">
                            <CardHeader className="CardHeader">FZap</CardHeader>

                            <CardBody>
                              <CardTitle className="CardTitle">
                                {swift.name}
                              </CardTitle>
                              <p className="CardDescription">
                                {swift.description}
                              </p>
                              <CardTitle clasName="CardTitle2">
                                DevAddress
                              </CardTitle>
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
                              <Button
                                clasName="UseButton"
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
                  )}
                </Row>
              </div>
            </Container>
          </center>
        </div>
      </HashRouter>
    );
  }
}
