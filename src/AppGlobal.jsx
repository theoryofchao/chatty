import React, {Component} from 'react';

let appData = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: 
  [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};

const setState = (newState) => {
  // merges old state with newState
  Object.assign(state, newState)
  // triggers re-render of entire UI
  window.render();
}

window.state = appData;

window.tx = {};

tx.addMessage = (newMessage) => {
  let updatedMessages = state.messages;
  updatedMessages.push(newMessage);
  setState({messages: updatedMessages});
};

class AppGlobal extends Component {
  
}

export default AppGlobal;
