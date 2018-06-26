import React from 'react';
import moment from 'moment';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEdit() {

  }

  handleDelete() {

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
          <button>Edit</button>
          <button>Delete</button>
        </ul>
      </div>
    );

  }
}

export default EventItem;
