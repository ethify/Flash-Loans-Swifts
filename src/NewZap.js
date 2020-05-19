import React from "react";
import "./NewZap.css";
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
        <Container className="main-container">
          <h4>Add New Zap</h4>
          <br />
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    placeholder="Name"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="#description">Description</label>
                  <FormInput
                    size="lg"
                    id="#description"
                    placeholder="Description"
                    onChange={(e) => {
                      this.setState({ description: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#choose">Choose</label>
                  <FormInput type="file" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#cgoose">Choose</label>
                  <FormInput type="file" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#parametername">Parameter Name</label>
                  <FormInput
                    onChange={(e) =>
                      this.setState({ currentParamName: e.target.value })
                    }
                    placeholder="Parameter Name"
                  />
                  ;
                  <FormGroup>
                    <label htmlFor="#type">Choose The Type</label>
                    <FormSelect
                      onChange={(e) => {
                        this.setState({ currentParamType: e.target.value });
                      }}
                    >
                      <option value="">Select Parameter Type</option>
                      <option value="address">Address</option>
                      <option value="int">Int</option>
                      <option value="string">String </option>
                    </FormSelect>
                  </FormGroup>
                  <Button
                    className="AddP"
                    outline
                    pill
                    theme="info"
                    onClick={this.addParameter}
                  >
                    Add Parameter
                  </Button>
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
                </FormGroup>
              </Form>
            </Col>

            <Col>
              {this.state.parameters.length < 0 ? (
                <div>No parameters Added</div>
              ) : (
                <div>
                  {this.state.parameters.map((param) => (
                    <Card className="NewCard">
                      <CardBody>
                        <center>
                          <p>
                            {param.paramName} - {param.paramType}
                          </p>
                        </center>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
