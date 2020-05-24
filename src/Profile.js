import React from "react";
import Avatar from "./avatar.png";
import {
  Row,
  Col,
  Container,
  Button,
  FormInput,
  Collapse,
  Card,
  CardFooter,
  CardBody,
  CardTitle,
  CardHeader,
  CardImg,
  ListGroup,
  ListGroupItem,
} from "shards-react";
import {
  faAddressCard,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.css";
import { Route } from "react-router-dom";

import { getShortAddress } from './services/utils'
import { getProfile, setProfiles } from "./services";
import GridLoader from "react-spinners/GridLoader";

export default class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userAddress: '',
      userProfile: null
    }
  }

  async componentDidMount() {
    const userAddress = this.props.match.params.userAddress
    const userProfile = await getProfile(userAddress)
    this.setState({ userAddress, userProfile })
    console.log('state', this.state)
  }

  async testButton() {
    const newUserProfile = {
      address: this.state.userAddress,
      totalUpVotes: 0,
      totalDownVotes: 0,
      totalSwiftsCreated: 1
    }
    console.log(newUserProfile, 'newUserProfile')
    const newProfiles = await setProfiles(newUserProfile)
    console.log('new Profiles', newProfiles)
  }

  render() {
    return (
      <div>
        {
          this.state.userProfile ? (
            <div>
              <h2 className="Heading">Profile</h2>
              <center>
                <Card className="ProfileCard">
                  <CardBody>
                    <Container>
                      <Row>
                        <Col>
                          <CardImg className="Avatar" src={Avatar} />
                          <CardTitle className="NameTitle">Name</CardTitle>
                          <p className="AddressTitle">Address: {getShortAddress(this.state.userAddress)}</p>
                          <Button outline pill theme="info" className="LearnButton">
                            Learn More &rarr;
                    </Button>
                        </Col>
                        <Col>
                          <center>
                            <div className="Div1">
                              <h4>{this.state.userProfile.totalSwiftsCreated}</h4>
                              <h6>
                                Swifts <FontAwesomeIcon icon={faAddressCard} />{" "}
                              </h6>
                            </div>
                            <div className="Div1">
                              <h4>{this.state.userProfile.totalUpVotes}</h4>
                              <h6>
                                UpVotes <FontAwesomeIcon icon={faThumbsUp} />
                              </h6>
                            </div>
                            <div className="Div1">
                              <h4>{this.state.userProfile.totalDownVotes}</h4>
                              <h6>
                                DownVotes <FontAwesomeIcon icon={faThumbsDown} />
                              </h6>
                            </div>
                          </center>
                        </Col>
                      </Row>{" "}
                    </Container>
                  </CardBody>
                </Card>
              </center>
              <br />
              <br />
              <h2 className="Heading">Your Swifts</h2>
              {
                this.state.userProfile.userDeployedSwifts.length > 0 ? (
                  this.state.userProfile.userDeployedSwifts.map((swift) =>
                    <div>
                      <center>
                        <Card className="UserSwifts">
                          <CardBody>
                            <CardTitle>{swift.contractName}</CardTitle>
                            {swift.contractAddress}
                          </CardBody>
                          <CardFooter>
                            <Button
                              theme="info"
                              onClick={(e) => {
                                this.props.history.push(
                                  {
                                    pathname: "/swift/" + swift.swiftUUID,
                                    state: {
                                      contractAddress: swift.contractAddress
                                    }
                                  }
                                );
                              }}
                            >Use Again &rarr;</Button>
                          </CardFooter>
                        </Card>
                        <br />
                      </center>
                    </div>
                  )
                ) : null
              }
            </div>
          ) : (
              <div>
                <Container className="main-container">
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
                </Container>
              </div>
            )
        }
      </div>
    );
  }
}
