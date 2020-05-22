import React from "react";
import "./FzapName.css";
import {deployContract,executeOperation, withdraw} from "./services/Web3Services"
import {getWeb3Instance} from "./services/index"
import * as Web3 from "web3";
import {
  CardBody,
  Card,
  Form,
  FormInput,
  FormGroup,
  Container,
  Row,
  Col,
  Button,
} from "shards-react";

import { getSwift } from './services'

export default class FZapName extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      asset:"",
      currentSwiftID: '',
      currentSwift: {
        parameters: []
      },
      parametersInput: [],
      contract:""
    }

    this.executeSwift = this.executeSwift.bind(this)
    this.deploy = this.deploy.bind(this)
  }

  async componentDidMount() {
    const swiftID = this.props.match.params.swiftUUID
    console.log(swiftID, 'swiftID');

    const swift = await getSwift(swiftID)

    console.log('curent siwft', swiftID)
    console.log(swift.contractByteCode)

    this.setState({ currentSwift: swift, currentSwiftID: swiftID })
  }

  async executeSwift() {
    var args =[]
    this.state.currentSwift.parameters.map(async (param) =>
    {if(param.paramName=="amount"){
      const web3 = new Web3();
      var amt = web3.utils.toWei(this.state[param.paramName], "ether");
      args.push(amt)
    }else{
      args.push(this.state[param.paramName])
    }
    })
    console.log(args);
    const web3 = await getWeb3Instance();
    var amt ="1";
    var args = ["0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108",web3.utils.toWei(amt, "ether")]
    const swiftID = this.props.match.params.swiftUUID
    console.log(swiftID, 'swiftID');
    const swift = await getSwift(swiftID)
    const contractAddress = this.state.contract;
    const tx= await executeOperation(contractAddress,swift.contractABI,args);
    console.log(tx)
  }
  deploy= async() =>{
    const swiftID = this.props.match.params.swiftUUID
    console.log(swiftID, 'swiftID');
    const swift = await getSwift(swiftID)
    var contract = await deployContract(swift.contractByteCode, swift.contractABI)
    console.log("deployed",contract);
    this.setState({contract : contract});
  }
  withdrawAsset = async () => {
    const swiftID = this.props.match.params.swiftUUID
    console.log(swiftID, 'swiftID');
    const swift = await getSwift(swiftID)
    const contractAddress = this.state.contract;
    const tx= await withdraw(contractAddress,swift.contractABI,this.state.asset);
    console.log(tx)
  }


  render() {
    return (
      <div>
        <Container className="main-container">
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
        </Container>
      </div>
    );
  }
}
