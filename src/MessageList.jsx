import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    return (
      <main className="messages">
        { this.props.messages.map((message, index, array) => 
          <Message key={index} message={message} />
        )}
      </main>
    );
  }
}

export default MessageList;
