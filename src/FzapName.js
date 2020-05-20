import React from "react";
import "./FzapName.css";
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
      currentSwiftID: '',
      currentSwift: {
        parameters: []
      },
      parametersInput: []
    }

    this.executeSwift = this.executeSwift.bind(this)
  }

  async componentDidMount() {
    const swiftID = this.props.match.params.swiftUUID
    console.log(swiftID, 'swiftID');

    const swift = await getSwift(swiftID)

    console.log('curent siwft', swiftID)

    this.setState({ currentSwift: swift, currentSwiftID: swiftID })
  }

  async executeSwift() {
    console.log('Executing Swift')
    console.log(this.state)
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
              </CardBody>
            </Card>
          </center>
        </Container>
      </div>
    );
  }
}
