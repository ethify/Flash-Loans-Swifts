import React from "react";
import "./NewZap.css";
import { verifyFile } from "./services/FileServices";
import {
  Form,
  FormInput,
  FormGroup,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  FormSelect,
  Button,
  FormTextarea,
  Alert
} from "shards-react";
import {
  getSpace,
  setSwifts,
  upVoteSwift,
  uploadToSkynet,
  compileCode,
  getProfile,
  defaultAddress,
  setProfiles,
  updateProfiles,
  getProfiles
} from "./services";
import {
  faUser,
  faAddressCard,
  faFileInvoice,
  faFileContract,
  faFileSignature,
  faFileAlt,
  faServer,
  faStickyNote,
  faExternalLinkAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import TransactionModal from './Modal'

export default class NewZap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      parameters: [],
      currentParamName: "",
      currentParamType: "",
      filereader: null,
      skylink: null,
      contractFile: null,
      contractByteCode: null,
      contractABI: null,
      rewardFeeAddress: '',
      open: false,
      currentStatus: null,
      modalContent: '',
      showAlert: false
    };

    this.addSwift = this.addSwift.bind(this);
    this.addParameter = this.addParameter.bind(this);
    this.handleFileChosen = this.handleFileChosen.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  addParameter = async () => {
    const parameter = {
      paramName: this.state.currentParamName,
      paramType: this.state.currentParamType,
    };

    const currentParams = this.state.parameters;
    currentParams.push(parameter);
    this.setState({ parameters: currentParams });
  };

  testUpload = async () => {
    console.log("state is", this.state);
    console.log("Uploading File to Skynet");
    if (this.state.contractFile) {
      await uploadToSkynet(this.state.contractFile);
    }
  };

  handleFileRead = (contractFile) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsText(contractFile);
      fileReader.onloadend = (e) => {
        const content = fileReader.result;
        var resp = verifyFile(content.toString());
        const isCorrect = true;
        console.log("isCorrect", isCorrect);
        if (isCorrect) {
          this.setState({ filereader: fileReader });
        }
        resolve(isCorrect);
      };
    });
  };

  handleFileChosen = async (e) => {
    console.log("file", e.target.files[0]);
    const file = e.target.files[0];

    const isCorrect = await this.handleFileRead(file);
    console.log("filereader", this.state.filereader);
    if (!isCorrect) {
      return;
    }

    this.setState({ contractFile: file });
  };

  addSwift = async () => {
    if (!this.state.contractFile) {
      this.setState({ showAlert: true })
      return
    } else {
      this.setState({ showAlert: false })
    }
    const userAddress = await defaultAddress()
    this.toggle()
    this.setState({ currentStatus: "inProgress", modalContent: "Adding Your Swift...Please Wait" })
    const space = await getSpace();
    const swiftUUID = uuidv4();
    let skylink;

    if (this.state.contractFile) {
      skylink = await uploadToSkynet(this.state.contractFile);
      if (skylink === 'error') {
        this.setState({ currentStatus: "failed", modalContent: "Adding Swift Failed! Please Try Again" })
        return
      }
    }

    const swift = {
      id: swiftUUID,
      name: this.state.name,
      description: this.state.description,
      parameters: this.state.parameters,
      voters: [],
      upVotes: 0,
      downVotes: 0,
      contractSourceSkylink: skylink,
      contractABI: this.state.contractABI,
      contractByteCode: this.state.contractByteCode,
      rewardFeeAddress: this.state.rewardFeeAddress
    };

    let userProfile = await getProfile(userAddress)

    if (!userProfile) {
      const newUserProfile = {
        address: userAddress,
        totalUpVotes: 0,
        totalDownVotes: 0,
        totalSwiftsCreated: 1,
        userDeployedSwifts: []
      }

      await setProfiles(newUserProfile)
    } else {
      userProfile.totalSwiftsCreated = userProfile.totalSwiftsCreated++
      const updatedProfiles = await updateProfiles(userProfile)
      console.log('Successfully Updated')
    }

    await setSwifts(swift);
    this.setState({ currentStatus: "done", modalContent: "Swift Successfully Added" })
  };

  render() {
    return (
      <div className="main-container">
        {
          this.state.showAlert ? (
            <Alert className="fileAlert" theme="danger">
              <center>
                File Not Uploaded or It does not fulfill requirements
                  </center>
            </Alert>
          ) : null
        }
        <h2 className="Heading">Add New Swift</h2>
        <center>
          <Card className="Card1">
            <CardBody>
              <Form>
                <FormGroup>
                  <label className="Lable" htmlFor="#name">
                    Name
                  </label>

                  <FormInput
                    className="Name"
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    placeholder=" Name"
                  />
                </FormGroup>
                <FormGroup>
                  <label className="Lable" htmlFor="#address">
                    Reward Fee Address
                  </label>
                  <FormInput className="Address" placeholder="Reward Fee Address" onChange={(e) =>
                    this.setState({ rewardFeeAddress: e.target.value })
                  } />
                </FormGroup>
                <FormGroup>
                  <label className="Lable" htmlFor="#description">
                    Description
                  </label>
                  <FormTextarea
                    className="Description"
                    id="#description"
                    placeholder="Description"
                    onChange={(e) => {
                      this.setState({
                        description: e.target.value,
                      });
                    }}
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </center>
        <center>
          <Card className="Card1">
            <CardBody>
              <Form>
                <FormGroup>
                  <label className="Lable" htmlFor="#bytecode">
                    Contract ByteCode
                  </label>
                  <FormTextarea
                    className="ByteCode"
                    id="#contract"
                    placeholder="Contract Bytecode"
                    onChange={(e) => {
                      this.setState({ contractByteCode: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label className="Lable" htmlFor="#abi">
                    Contract ABI
                  </label>
                  <FormTextarea
                    className="Abi"
                    id="#abi"
                    placeholder="Contract ABI"
                    onChange={(e) => {
                      this.setState({ contractABI: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label className="Lable" htmlFor="#choose">
                    Choose
                  </label>
                  <FormInput
                    className="Choose"
                    type="file"
                    id="file"
                    className="input-file"
                    accept=".sol"
                    onChange={this.handleFileChosen}
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </center>
        <center>
          <Card className="Card1">
            <CardBody>
              <Form>
                <Row>
                  <Col>
                    <FormGroup>
                      <label className="Lable" htmlFor="#parametername">
                        Parameter Name
                      </label>
                      <FormInput
                        className="PName"
                        onChange={(e) => {
                          this.setState({
                            currentParamName: e.target.value,
                          });
                        }}
                        placeholder="Parameter Name"
                      />
                      ;
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label className="Lable" htmlFor="#type">
                        Choose The Type
                      </label>
                      <FormSelect
                        onChange={(e) => {
                          this.setState({
                            currentParamType: e.target.value,
                          });
                        }}
                      >
                        <option value="" className="Select">
                          Select Parameter Type
                        </option>
                        <option value="Address">Address</option>
                        <option value="Int">Int</option>
                        <option value="String">String </option>
                        <option value="AssetAmount">Amount of Asset</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>
                  <Col>
                    <Button
                      className="AddP"
                      outline
                      pill
                      theme="info"
                      onClick={this.addParameter}
                    >
                      <FontAwesomeIcon className="Icon1" icon={faStickyNote} />
                      Add Parameter
                    </Button>
                  </Col>
                </Row>
                {this.state.parameters.length < 0 ? (
                  <div>No parameters Added</div>
                ) : (
                    <div>
                      {this.state.parameters.map((param) => (
                        <div className="NewCard1">
                          <Row>
                            <Col>
                              <h5 className="ParamHeading">
                                <span className="Span"> {param.paramName} </span>{" "}
                              </h5>
                            </Col>
                            <Col>
                              <h5>
                                <span className="Span">{param.paramType}</span>{" "}
                              </h5>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </div>
                  )}
                <center>
                  <Button
                    className="AddS"
                    outline
                    pill
                    theme="info"
                    onClick={this.addSwift}
                  >
                    <FontAwesomeIcon className="Icon1" icon={faPlus} />
                    Add Swift
                  </Button>
                </center>
              </Form>
            </CardBody>
          </Card>
        </center>
        <TransactionModal content={this.state.modalContent} status={this.state.currentStatus} open={this.state.open} toggle={this.toggle}></TransactionModal>
      </div>
    );
  }
}
