import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { showModal, closeModal } from '../actions/modal_actions';
import { deleteEvent } from '../actions/event_actions';
import EditFormContainer from './edit_form_container';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.props.showModal(
      <EditFormContainer
        month={this.props.month}
        day={this.props.day}
        date={this.props.date}
        eventId={this.props.event.id}
        />
    );
  }

  handleDelete() {
    this.props.deleteEvent(this.props.event.id)
    .then(this.props.closeModal);
  }

  render() {
    const { event } = this.props;
    const start = moment(event.start_time).format("h:mm A");
    const end = moment(event.end_time).format("h:mm A");

    return (
      <div>
        <ul>
          <li>{start}</li>
          -
          <li>{end}</li>
          <li>{event.description}</li>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </ul>
      </div>
    );

  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: component => dispatch(showModal(component)),
    deleteEvent: id => dispatch(deleteEvent(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect (null, mapDispatchToProps)(EventItem);
