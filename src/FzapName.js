import React from "react";
import "./FzapName.css";
import {
  deployContract,
  executeOperation,
  withdraw,
} from "./services/Web3Services";
import { getWeb3Instance } from "./services/index";
import * as Web3 from "web3";
import {
  CardBody,
  Card,
  CardHeader,
  CardTitle,
  Form,
  FormInput,
  FormGroup,
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";
import {
  faThumbsDown,
  faThumbsUp,
  faHandPointer,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSwift } from "./services";
import * as BigNumber from 'bignumber.js'
import makeBlockie from "ethereum-blockies-base64";
import { getShortAddress } from './services/utils'

export default class FZapName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      asset: "",
      currentSwiftID: "",
      currentSwift: {
        parameters: [],
      },
      parametersInput: [],
      currentTab: "Summary",
      contract: "",
    };

    this.executeSwift = this.executeSwift.bind(this);
    this.withdrawAsset = this.withdrawAsset.bind(this);
    this.deploy = this.deploy.bind(this);
  }

  async componentDidMount() {
    const swiftID = this.props.match.params.swiftUUID;
    console.log(swiftID, "swiftID");

    const swift = await getSwift(swiftID);

    console.log("curent siwft", swiftID);
    console.log(swift.contractByteCode);

    this.setState({ currentSwift: swift, currentSwiftID: swiftID });
  }

  executeSwift = async () => {
    var args = [];
    this.state.currentSwift.parameters.map(async (param) => {

      if (param.paramType ==+ "AssetAmount") {
        const amt = new BigNumber(this.state[param.paramName])
        args.push(amt);
      } else {
        args.push(this.state[param.paramName]);
      }

    });

    console.log(args);

    const web3 = await getWeb3Instance();

    // var amt = "1";
    // var args = [
    //   "0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108",
    //   web3.utils.toWei(amt, "ether"),
    // ];
    
    const swiftID = this.props.match.params.swiftUUID;
    console.log(swiftID, "swiftID");
    const swift = await getSwift(swiftID);
    const contractAddress = this.state.contract;
    const tx = await executeOperation(contractAddress, swift.contractABI, args);
    console.log(tx);
  }

  deploy = async () => {
    const swiftID = this.props.match.params.swiftUUID;
    console.log(swiftID, "swiftID");
    const swift = await getSwift(swiftID);
    var contract = await deployContract(
      swift.contractByteCode,
      swift.contractABI
    );
    console.log("deployed", contract);
    this.setState({ contract: contract });
  }

  withdrawAsset = async () => {
    const swiftID = this.props.match.params.swiftUUID;
    console.log(swiftID, "swiftID");
    const swift = await getSwift(swiftID);
    const contractAddress = this.state.contract;
    const tx = await withdraw(
      contractAddress,
      swift.contractABI,
      this.state.asset
    );
    console.log(tx);
  }

  render() {
    return (
      <div>
        <Container className="main-container">
          <Row>
            <Col sm="12" md="4" lg="3">
              <Card className="Card">
                <center>
                  <CardBody>
                    <CardTitle className="CardTitle">
                      {this.state.currentSwift.name}
                    </CardTitle>
                    <p className="CardDescription">
                      {this.state.currentSwift.description}
                    </p>
                    <br />
                              Made By
                              {this.state.currentSwift.rewardFeeAddress ? (
                              <div>
                                <img
                                  src={makeBlockie(this.state.currentSwift.rewardFeeAddress)}
                                  alt="address blockie"
                                  className="address-blockie"
                                  width="15"
                                />
                                <span className="short-address">
                                  {getShortAddress(this.state.currentSwift.rewardFeeAddress)}
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
                          value={this.state.currentSwift.id}
                          className="UpVote"
                          onClick={this.upVoteSwift}
                        >
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                      </div>
                      <span className="UpNumber">
                        {this.state.currentSwift.upVotes}
                      </span>

                      <div className="Votes2">
                        <button
                          value={this.state.currentSwift.id}
                          className="DownVote"
                          onClick={this.downVoteSwift}
                        >
                          <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                      </div>
                      <span className="DownNumber">
                        {this.state.currentSwift.downVotes}
                      </span>
                    </div>
                    <br />
                    <Button
                      outline
                      pill
                      theme="info"
                      className="UseButton"
                      name={this.state.currentSwift.id}
                      onClick={(e) => { this.setState({ currentTab: "UseNow"}) }}
                    >
                      Use This &rarr;
                    </Button>
                  </CardBody>
                </center>
              </Card>
            </Col>
            <Col>
              <Nav tabs className="Tabs">
                <NavItem>
                  <NavLink
                    className="NavLink"
                    value="Summary"
                    href="#"
                    active={this.state.currentTab === "Summary"}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ currentTab: "Summary" });
                      console.log("state", this.state);
                    }}
                  >
                    Summary
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="NavLink"
                    value="Stats"
                    href="#"
                    active={this.state.currentTab === "Stats"}
                    onClick={(e) => this.setState({ currentTab: "Stats" })}
                  >
                    Stats
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="NavLink"
                    value="UseNow"
                    href="#"
                    active={this.state.currentTab === "UseNow"}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ currentTab: "UseNow" });
                      console.log("state now", this.state);
                    }}
                  >
                    Use Now{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="NavLink"
                    value="Users"
                    href="#"
                    active={this.state.currentTab === "Users"}
                    onClick={(e) => this.setState({ currentTab: "Users" })}
                  >
                    Previous Users{" "}
                  </NavLink>
                </NavItem>
              </Nav>
              <Container>
                {this.state.currentTab === "Summary" ? (
                  <div className="TabDiv">
                    <h5>Description</h5>
                    <p>
                      {this.state.currentSwift.description}
                    </p>
                  </div>
                ) : null}
                {this.state.currentTab === "Stats" ? (
                  <div className="TabDiv">
                    <h4>
                      Total Upvotes <FontAwesomeIcon icon={faThumbsUp} /> : {this.state.currentSwift.upVotes}
                    </h4>
                    <h4>
                      Total Downvotes <FontAwesomeIcon icon={faThumbsDown} /> : {this.state.currentSwift.downVotes}
                    </h4>
                  </div>
                ) : null}
                {this.state.currentTab === "Users" ? <div></div> : null}
                {this.state.currentTab === "UseNow" ? (
                  <div className="TabDiv">
                    <Card>
                      <CardBody>
                        <h5>Deploy Contract</h5>
                        <center>
                          <Button
                            className="ButtonUse"
                            outline
                            pill
                            theme="info"
                            onClick={this.deploy}
                          >
                            <FontAwesomeIcon
                              className="UseIcon"
                              icon={faHandPointer}
                            />{" "}
                            Deploy Now
                          </Button>
                        </center>
                      </CardBody>
                    </Card>
                    <Card className="UseCard">
                      <CardBody>
                        <CardTitle>Transfer Ownerships / Assets to Contract</CardTitle>
                        Please perform all Post Flash Loan execution operations necessary for the transaction to run successfully. 
                        These might be mentioned in the description of the swift
                      </CardBody>
                    </Card>
                    <Card className="UseCard">
                      <CardBody>
                        <Form>
                          <FormGroup>
                            <div>
                              <Container>
                                {this.state.currentSwift.parameters.map(
                                  (param) => (
                                    <Row>
                                      <Col>
                                        <label
                                          className="Inline"
                                          htmlFor="#parametername"
                                        >
                                          {param.paramName}
                                        </label>
                                      </Col>
                                      <Col>
                                        <FormInput
                                          className="Inline1"
                                          name={param.paramName}
                                          placeholder="Parameter"
                                          onChange={(e) => {
                                            const paramName = param.paramName;
                                            this.setState({
                                              [paramName]: e.target.value,
                                            });
                                            console.log(
                                              "parametersINput",
                                              this.state
                                            );
                                          }}
                                        />
                                      </Col>
                                      <Col>
                                        <label className="Inline2">
                                          {param.paramType}
                                        </label>
                                      </Col>
                                    </Row>
                                  )
                                )}
                                <br />
                              </Container>
                            </div>
                          </FormGroup>
                        </Form>
                        <center>
                          <Button
                            className="ButtonUse"
                            outline
                            pill
                            theme="info"
                            onClick={this.executeSwift}
                          >
                            Execute Swift
                          </Button>
                        </center>
                      </CardBody>
                    </Card>
                    <Card className="UseCard">
                      <CardBody>
                        <Form>
                          <FormGroup>
                            <label htmlFor="#withdraw">Withdraw Asset</label>
                            <FormInput
                              id="#username"
                              placeholder="Asset Address"
                            />
                          </FormGroup>
                        </Form>
                        <center>
                          <Button
                            className="ButtonUse"
                            outline
                            pill
                            theme="info"
                          >
                            {" "}
                            <FontAwesomeIcon
                              className="UseIcon"
                              icon={faDollarSign}
                            />
                            Withdraw Asset
                          </Button>
                        </center>
                      </CardBody>
                    </Card>
                  </div>
                ) : null}
              </Container>
            </Col>
          </Row>
        </Container>

        {/**   <Container className="main-container">
          <h4 className="Heading">{this.state.currentSwift.name}</h4>
          <center>
            <Card className="FzapCard">
              <CardBody>
                <p>{this.state.currentSwift.description}</p>
              </CardBody>
            </Card>

            <br/>
            <Button
              onClick={this.deploy}
            />
            <Card className="FzapCard">
              <CardBody>
                <Form>
                  <FormGroup>
                    <div>
                      <Container>
                        {
                          this.state.currentSwift.parameters.map((param) =>
                            <Row>
                              <Col>

                                <label className="Inline" htmlFor="#parametername">
                                  {param.paramName}
                                </label>
                              </Col>
                              <Col>
                                <FormInput
                                  className="Inline"
                                  name={param.paramName}
                                  placeholder="Parameter"
                                  onChange={(e) => {
                                    const paramName = param.paramName
                                    this.setState({ [paramName]: e.target.value })
                                    console.log('parametersINput', this.state)
                                  }}
                                />
                              </Col>
                              <Col>
                                <label className="Inline">{param.paramType}</label>
                              </Col>
                            </Row>
                          )
                        }
                        <br/>
                      </Container>
                    </div>
                  </FormGroup>
                </Form>
                <Button onClick={this.executeSwift}>Execute Swift</Button>
                <br/>
                <Row>
                              <Col>
                              
                                <label className="Inline" htmlFor="#parametername">
                                  Asset Address
                                </label>
                              </Col>
                              <Col>
                                <FormInput
                                  className="Inline"
                                  name="asset"
                                  placeholder="Parameter"
                                  onChange={(e) => {
                                    this.setState({ asset: e.target.value })
                                    console.log('parametersINput', this.state.asset)
                                  }}
                                />
                              </Col>
                              <Col>
                                <label className="Inline">Asset Address</label>
                              </Col>
                            </Row>
                            <br/>
                            <Button onClick={this.withdrawAsset}>withdraw</Button>
 
              </CardBody>
            </Card>
          </center>
                      </Container> */}
      </div>
    );
  }
}
