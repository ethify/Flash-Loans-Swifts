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

export default class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userAddress: '',
      userProfile: {}
    }
  }

  async componentDidMount() {
    const userAddress = this.props.match.params.userAddress
    const userProfile = await getProfile(userAddress)
    this.setState({ userAddress, userProfile})
  }

  async testButton() {
    const newUserProfile = {
      address: this.state.userAddress,
      totalUpVotes: 0,
      totalDownVotes: 0,
      totalZapsCreated: 1
    }
    console.log(newUserProfile, 'newUserProfile')
    const newProfiles = await setProfiles(newUserProfile)
    console.log('new Profiles', newProfiles)
  }

  render() {
    return (
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
                        <h4>{this.state.userProfile.totalZapsCreated}</h4>
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
      </div>
    );
  }
}
