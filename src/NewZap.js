  import React from "react";
  import "./NewZap.css";
  import { verifyFile } from './services/FileServices';
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
  import { getSpace, setSwifts, upVoteSwift, uploadToSkynet, compileCode } from "./services";

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
        skylink: null,
        contractFile: null,
        contractByteCode: null,
        contractABI: null,
      };

      this.addSwift = this.addSwift.bind(this);
      this.addParameter = this.addParameter.bind(this);
      this.handleFileChosen = this.handleFileChosen.bind(this);
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
      console.log('state is', this.state)
      console.log('Uploading File to Skynet')
      if(this.state.contractFile){
        await uploadToSkynet(this.state.contractFile)
      }
    }

    handleFileRead = (contractFile) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsText(contractFile)

        fileReader.onloadend = (e) => {
          const content = fileReader.result;
          var resp = verifyFile(content.toString());
          const isCorrect = resp 
          console.log('isCorrect', isCorrect)
          if(isCorrect){
            this.setState({ filereader: fileReader })
          }
          resolve(isCorrect)
        }

      })
    };

    handleFileChosen = async (e) => {
      console.log('file', e.target.files[0])
      const file = e.target.files[0]

      const isCorrect = await this.handleFileRead(file)
      console.log('filereader', this.state.filereader)
      if(!isCorrect){
        return
      }

      this.setState({ contractFile: file})
    };

    addSwift = async () => {
      const space = await getSpace();

      const swiftUUID = uuidv4()
      let skylink

      if(this.state.contractFile){
        skylink = await uploadToSkynet(this.state.contractFile)
      }

      const swift = {
        id: swiftUUID,
        name: this.state.name,
        description: this.state.description,
        parameters: this.state.parameters,
        voters: [],
        upVotes: 0,
        downVotes: 0,
        skylink: skylink
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
                    <FormInput type="file"
                      id='file'
                      className='input-file'
                      accept=".sol"
                      onChange={this.handleFileChosen}
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="#bytecode">Contract ByteCode</label>
                    <FormInput
                      size="lg"
                      id="#description"
                      placeholder="Contract Bytecode"
                      onChange={(e) => {
                        this.setState({ contractByteCode: e.target.value });
                      }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="#abi">Contract ABI</label>
                    <FormInput
                      size="lg"
                      id="#abi"
                      placeholder="Contract ABI"
                      onChange={(e) => {
                        this.setState({ contractABI: e.target.value });
                      }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="#parametername">Parameter Name</label>
                    <FormInput
                      onChange={(e) => {
                        this.setState({ currentParamName: e.target.value })
                      }}
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
                      <Button onClick={this.testUpload}>
                        Test Upload
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
