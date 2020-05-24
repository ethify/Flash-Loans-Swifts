import React from "react";
import { Modal, ModalBody } from "shards-react";
import BounceLoader from "react-spinners/BounceLoader";

import {
    faCheckCircle,
    faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Modal.css'

export default class TransactionModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal open={this.props.open} toggle={this.props.toggle}>
                    <center>
                        <ModalBody>
                            {
                                this.props.status === "inProgress" ? (
                                    <div>
                                        <h5>{this.props.content}</h5>
                                        <BounceLoader
                                            size={40}
                                            color={"#00b8d8"}
                                            loading={this.props.open}
                                        />
                                    </div>
                                ) : null
                            }
                            {
                                this.props.status === "done" ? (
                                    <div>
                                        <h5>{this.props.content}</h5>
                                        <FontAwesomeIcon className="doneIcon" icon={faCheckCircle} />
                                    </div>
                                ) : null
                            }
                            {
                                this.props.status === "failed" ? (
                                    <div>
                                        <h5>{this.props.content}</h5>
                                        <FontAwesomeIcon className="failedIcon" icon={faTimesCircle} />
                                    </div>
                                ) : null
                            }
                        </ModalBody>
                    </center>
                </Modal>
            </div>
        );
    }
}