import React, {Component} from 'react';

let appData = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
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
  //let updatedMessages = state.messages;
  //updatedMessages.push(newMessage);
  socket.send(JSON.stringify(newMessage));
  //setState({messages: updatedMessages});
};

tx.getMessage = (message) => {
  let updatedMessages = state.messages;
  updatedMessages.push(message);
  setState({messages: updatedMessages});
};

class AppGlobal extends Component {
  
}

export default AppGlobal;
