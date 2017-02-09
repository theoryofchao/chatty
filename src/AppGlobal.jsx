import React, {Component} from 'react';

let appData = {
  userCount: 0,
  color: 'black',
  currentUser: {}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []
};

const setState = (newState) => {
  // merges old state with newState
  Object.assign(state, newState)
  // triggers re-render of entire UI
  window.render();
}

window.state = appData;

window.tx = {};

tx.addMessage = (newMessage, socket) => {
  socket.send(JSON.stringify(newMessage));
};

tx.changeUsername = (oldUsername, newUsername, socket) => {
  let username = {name: newUsername};
  let tempOldUsername = oldUsername ? oldUsername : "Anonymous";

  let notification = {type: `postNotification`, content: `${tempOldUsername} has changed their name to ${newUsername}`};
  setState({currentUser: username});
  tx.addMessage(notification, socket);
};

tx.getMessage = (message) => {
  let updatedMessages = state.messages;
  updatedMessages.push(message);
  setState({messages: updatedMessages});
};

tx.getUserCount = (countObj) => {
  setState({userCount: countObj.numUsers});
};

tx.setTextColor = (textColor) => {
  setState({color: textColor.color});
};

class AppGlobal extends Component {
  
}

export default AppGlobal;
