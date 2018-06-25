import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';

class Modal extends React.Component {
  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
    if (this.props.component) {
      return(
        <div className='modal-window' onClick={this.props.closeModal}>
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
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
