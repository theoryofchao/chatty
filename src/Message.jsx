import React, {Component} from 'react';

let imageExists = (url, callback) => {
  var img = new Image();
  img.onload = function() { callback(true); };
  img.onerror = function() { callback(false); };
  img.src = url;
}

class Message extends Component {
  render() {

    const spanStyle = {
      color: this.props.message.color
    };

    let messageType=null;

    

    switch(this.props.message.type) {
      case 'incomingMessage':
        var imageToPost=null;
        
        let words = (this.props.message.content).split(/\s+/);
        words.forEach((word) => {
          if(word.match(/\.(jpeg|jpg|gif|png)$/) != null) {

            imageToPost=word;

            /*imageExists(word, (exists) => {
              if(exists) {

                imageToPost = word;

                console.log(imageToPost);
              }
            });*/
          }
        });


        messageType = <div className="message"><span className="message-username" style={spanStyle}>{this.props.message.username}</span><span className="message-content">{this.props.message.content}<img height={'60%'} src={imageToPost}/></span></div>;
        break;

      case 'incomingNotification':
        messageType = <div className="message_system"><span className="message-content">{this.props.message.content}</span></div>;
        break;

    };

    return messageType;
  }
}

export default Message;
