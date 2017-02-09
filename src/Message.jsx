import React, {Component} from 'react';


class Message extends Component {
  render() {

    const spanStyle = {
      color: this.props.message.color
    };

    let messageType=null;

    switch(this.props.message.type) {
      case 'incomingMessage':
        messageType = <div className="message"><span className="message-username" style={spanStyle}>{this.props.message.username}</span><span className="message-content">{this.props.message.content}</span></div>;
        break;

      case 'incomingNotification':
        messageType = <div className="message_system"><span className="message-content">{this.props.message.content}</span></div>;
        break;

    };

    return messageType;
  }
}

export default Message;
