import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Modal.css";
import { Button, Modal } from "react-bootstrap";

export class SimpleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleShowModal = () => {
    this.setState({
      show: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const {
      handleShow,
      buttonText,
      show,
      handleClose,
      modalTitle,
      modalBody,
      closeButtonText,
      handleSave,
      saveButtonText,
      headerOnly,
      footerOnly,
      buttonHide,
    } = this.props;

    return (
      // <Col md={{ span: 6, offset: 0 }}>
      // </Col>
      <>
        {buttonHide ? (
          ""
        ) : (
          <Button
            variant="primary"
            onClick={!handleShow ? this.handleShowModal : handleShow}
          >
            {buttonText}
          </Button>
        )}
        <Modal
          show={!handleShow ? (buttonHide ? true : this.state.show) : show}
          onHide={!handleShow ? this.handleCloseModal : handleClose}
          centered
        >
          {headerOnly || handleShow ? (
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
          ) : (
            ""
          )}
          <Modal.Body>{modalBody}</Modal.Body>
          {footerOnly || handleShow ? (
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={!handleShow ? this.handleCloseModal : handleClose}
              >
                {closeButtonText}
              </Button>
              <Button
                variant="primary"
                onClick={!handleShow ? this.handleCloseModal : handleSave}
              >
                {saveButtonText}
              </Button>
            </Modal.Footer>
          ) : (
            ""
          )}
        </Modal>
      </>
    );
  }
}

// SimpleModal.propTypes = {
//   type: PropTypes.oneOf(["simple"]),
//   items: PropTypes.array,
// };

SimpleModal.defaultProps = {};
