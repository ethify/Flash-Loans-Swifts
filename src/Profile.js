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
export default class Profile extends React.Component {
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
                    <h5 className="AddressTitle">My Address</h5>
                    <Button outline pill theme="info" className="LearnButton">
                      Learn More &rarr;
                    </Button>
                  </Col>
                  <Col>
                    <center>
                      <div className="Div1">
                        <h4>30</h4>
                        <h6>
                          Swifts <FontAwesomeIcon icon={faAddressCard} />{" "}
                        </h6>
                      </div>
                      <div className="Div1">
                        <h4>20</h4>
                        <h6>
                          UpVotes <FontAwesomeIcon icon={faThumbsUp} />
                        </h6>
                      </div>
                      <div className="Div1">
                        <h4>10</h4>
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
