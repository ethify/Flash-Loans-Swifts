import React from "react";
import "./Landing.css";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button,
  CardImg,
} from "shards-react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import What1 from "./What1.png";
import What2 from "./What2.png";
import FileAlt from "./FileAlt.png";
import What3 from "./What3.png";
import Developer1 from "./Developers1.png";
import Developer2 from "./Developers2.png";
import Developer3 from "./Developers3.png";
import Developer4 from "./Developers4.png";
import Withdraw1 from "./Withdraw1.png";
import Withdraw2 from "./Withdraw2.png";
import Withdraw3 from "./Withdraw3.png";
import Withdraw4 from "./Withdraw4.png";
import Withdraw5 from "./Withdraw5.png";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="LandingDiv">
          <center>
            {" "}
            <h2 className="FlashHeading">Flash Zap</h2>
            <p className="FlashPara">
              A Dapp that connects developers who writes flashloan smart
              contracts and everyone else who would want to use them.
            </p>
            <Button className="LandingPill" outline pill theme="secondary">
              What is Flash Zap?
            </Button>
            <Button className="LandingPill" outline pill theme="secondary">
              Learn As User
            </Button>
            <Button className="LandingPill" outline pill theme="secondary">
              Learn As Developer
            </Button>
          </center>
        </div>
        <div className="CarouselDiv">
          <center>
            {" "}
            <h2 className="Heading5">What We Provide Here</h2>
            <div className="BelowHeading">
              <Card className="CarouselCard">
                <CarouselProvider
                  naturalSlideWidth={70}
                  naturalSlideHeight={30}
                  totalSlides={3}
                >
                  <Slider>
                    <Slide index={0}>
                      <img className="WhatImg" src={What1} />
                    </Slide>
                    <Slide index={1}>
                      {" "}
                      <img className="WhatImg" src={What2} />
                    </Slide>
                    <Slide index={2}>
                      {" "}
                      <img className="WhatImg" src={What3} />
                    </Slide>
                  </Slider>

                  <div className="SliderButtons">
                    <ButtonBack className="BackButton">&larr; Back </ButtonBack>
                    <ButtonNext className="NextButton">Next &rarr;</ButtonNext>
                  </div>
                </CarouselProvider>
              </Card>
            </div>
          </center>
        </div>

        <div className="UserDiv">
          <center>
            {" "}
            <h2 className="Heading6">For users</h2>
          </center>
          <div className="CardsDiv">
            <Container>
              <Row>
                <Col>
                  <Card className="UserCard">
                    <CardImg className="UserImage" top src={Withdraw1} />
                    <center>
                      {" "}
                      <CardBody>
                        <h3>Step 1</h3>
                        <h5>Pick a swift </h5>
                      </CardBody>
                    </center>
                  </Card>
                </Col>
                <Col>
                  <Card className="UserCard">
                    <CardImg className="UserImage" top src={Withdraw2} />
                    <center>
                      {" "}
                      <CardBody>
                        <h3>Step 2</h3>
                        <h5>Deploy the swift</h5>
                      </CardBody>
                    </center>
                  </Card>
                </Col>
                <Col>
                  <Card className="UserCard">
                    <CardImg className="UserImage" top src={Withdraw3} />
                    <center>
                      <CardBody>
                        <h3>Step 3</h3>
                        <h5>Transfer Assets to the contract address you get</h5>
                      </CardBody>
                    </center>
                  </Card>
                </Col>
                <Col>
                  <Card className="UserCard">
                    <CardImg className="UserImage" top src={Withdraw4} />
                    <center>
                      <CardBody>
                        <h3>Step 4</h3>
                        <h5>Execute the flashloan</h5>{" "}
                      </CardBody>
                    </center>
                  </Card>
                </Col>
                <Col>
                  <Card className="UserCard">
                    <CardImg className="UserImage" top src={Withdraw5} />
                    <center>
                      {" "}
                      <CardBody>
                        <h3>Step 5</h3>
                        <h5>Withdraw assets</h5>{" "}
                      </CardBody>
                    </center>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="DeveloperDiv">
          <center>
            {" "}
            <h3 className="DHeading">For Developers</h3>
          </center>
          <div>
            <Container>
              <Row>
                <Col sm="12" lg="6">
                  <Row>
                    <Col sm="12" lg="6">
                      <img width="90%" height="auto" src={Developer1} />
                    </Col>
                    <Col>
                      <center>
                        <h3>Step 1</h3>
                        <h5>
                          Submit a flattened smart contract(whole code in one
                          file)
                        </h5>
                      </center>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" lg="6">
                  <Row>
                    <Col className="DCole" sm="12" lg="6">
                      <img width="90%" height="auto" src={Developer2} />
                    </Col>
                    <Col>
                      <center>
                        <h3>Step 2</h3>

                        <h5>Follow the norms we have defined</h5>
                      </center>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="DRow">
                <Col sm="12" lg="6">
                  <Row>
                    <Col sm="12" lg="6">
                      <img width="90%" height="auto" src={Developer3} />
                    </Col>
                    <Col>
                      <center>
                        <h3>Step 3</h3>

                        <h5>Put the address where you want to get your fee.</h5>
                      </center>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12" lg="6">
                  <Row>
                    <Col className="DCole" sm="12" lg="6">
                      <img width="90%" height="auto" src={Developer4} />
                    </Col>
                    <Col>
                      <center>
                        <h3>Step 4</h3>

                        <h5>
                          Every time some users use your contract you get some
                          fee
                        </h5>
                      </center>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="Footer"></div>
      </div>
    );
  }
}
