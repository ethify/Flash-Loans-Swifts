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
} from "shards-react";
import { getSpace, setSwifts, upVoteSwift } from "./services";

import { v4 as uuidv4 } from "uuid";

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
    };
    this.addSwift = this.addSwift.bind(this);
    this.addParameter = this.addParameter.bind(this);
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
  handleFileRead = (e) => {
    const content = this.state.fileReader.result;
    var resp = verifyFile(content.toString());
    // console.log("Linter test"+resp.toString());
    // console.log(content);
    // if resp? doNothing: ShowError();
  };
  handleFileChosen = (file) => {
    this.state.fileReader = new FileReader();
    this.state.fileReader.onloadend = this.handleFileRead;
    this.state.fileReader.readAsText(file);
  };

  addSwift = async () => {
    const space = await getSpace();

    const swiftUUID = uuidv4();

    const swift = {
      id: swiftUUID,
      name: this.state.name,
      description: this.state.description,
      parameters: this.state.parameters,
      voters: [],
      upVotes: 0,
      downVotes: 0,
    };

    await setSwifts(swift);
  };

  render() {
    return (
      <div>
        <h4 className="Heading">Add New Zap</h4>
        <center>
          <Card className="NewCard">
            <CardBody>
              <Form>
                <Container>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label htmlFor="#name">Name</label>
                        <FormInput
                          className="Form"
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                          placeholder="Name"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label htmlFor="#cgoose">Choose</label>
                        <FormInput type="file" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label htmlFor="#description">Description</label>
                        <FormInput
                          size="lg"
                          id="#description"
                          placeholder="Description"
                          onChange={(e) => {
                            this.setState({
                              description: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label htmlFor="#choose">Choose</label>
                        <FormInput
                          type="file"
                          id="file"
                          className="input-file"
                          accept=".sol"
                          onChange={(e) =>
                            this.handleFileChosen(e.target.files[0])
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label htmlFor="#parametername">Parameter Name</label>
                        <FormInput
                          onChange={(e) => {
                            this.setState({ currentParamName: e.target.value });
                          }}
                          placeholder="Parameter Name"
                        />
                        ;
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label htmlFor="#type">Choose The Type</label>
                        <FormSelect
                          onChange={(e) => {
                            this.setState({
                              currentParamType: e.target.value,
                            });
                          }}
                        >
                          <option value="">Select Parameter Type</option>
                          <option value="Address">Address</option>
                          <option value="Int">Int</option>
                          <option value="String">String </option>
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
                        Add Parameter
                      </Button>
                    </Col>
                  </Row>
                </Container>

                {this.state.parameters.length < 0 ? (
                  <div>No parameters Added</div>
                ) : (
                  <div>
                    {this.state.parameters.map((param) => (
                      <Card className="NewCard1">
                        <CardBody>
                          <Row className="Param">
                            <Col>
                              <h5>Parameter Name </h5>
                              <h5>{param.paramName}</h5>
                            </Col>
                            <Col>
                              <h5>Parameter Type</h5>
                              <h5>{param.paramType}</h5>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
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
                    Add Swift
                  </Button>
                </center>
              </Form>
            </CardBody>{" "}
          </Card>
        </center>
      </div>
    );
  }
}
