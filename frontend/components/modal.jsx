import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import { clearEventErrors } from '../actions/event_actions';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  handleClose() {
    this.props.closeModal();
    this.props.clearEventErrors();
  }
  render() {
    if (this.props.component) {
      return(
        <div className='modal-window' onClick={this.handleClose}>
          <div onClick={this.stopPropagation} className="modal-conatiner">
            {this.props.component}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    component: state.ui.modals.component,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearEventErrors: () => dispatch(clearEventErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
