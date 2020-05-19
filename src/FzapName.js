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

export default class NewZap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSwiftID: '',
      currentSwift: {
        parameters: []
      }
    }
  }

  async componentDidMount() {
    const swiftID = this.props.match.params.swiftUUID
    console.log(swiftID, 'swiftID');

    const swift = await getSwift(swiftID)

    console.log('curent siwft', swiftID)

    this.setState({ currentSwift: swift, currentSwiftID: swiftID })
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
                                  id="#parametername"
                                  placeholder="Parameter"
                                />
                              </Col>
                              <Col>
                                <label className="Inline">{param.paramType}</label>
                              </Col>
                            </Row>
                          )
                        }
                      </Container>
                    </div>
                  </FormGroup>
                </Form>
              </CardBody>
              <Button>Execute Swift</Button>
            </Card>
          </center>
        </Container>
      </div>
    );
  }
}
