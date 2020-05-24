import React from "react";
import { Modal, ModalBody } from "shards-react";
import BounceLoader from "react-spinners/BounceLoader";

import {
    faCheckCircle,
    faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Modal.css'

export default class TransactionSpinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <center>
                    {
                        this.props.status === "inProgress" ? (
                            <div>
                                <p>Waiting For Your Transaction to be Merged</p>
                                <BounceLoader
                                    size={20}
                                    color={"#00b8d8"}
                                    loading={this.props.open}
                                />
                            </div>
                        ) : null
                    }
                    {
                        this.props.status === "done" ? (
                            <div>
                                <p>Transaction Successful</p>
                                <FontAwesomeIcon className="doneIcon" icon={faCheckCircle} />
                            </div>
                        ) : null
                    }
                    {
                        this.props.status === "failed" ? (
                            <div>
                                <p>Transaction Failed! Try Again</p>
                                <FontAwesomeIcon className="failedIcon" icon={faTimesCircle} />
                            </div>
                        ) : null
                    }
                    <p><a href={"https://ropsten.etherscan.io/tx/" + this.props.txhash}>Transaction Hash</a></p>
                </center>
            </div>
        );
    }
}