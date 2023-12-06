import React, {useState} from 'react';

export const StateChangeComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>Click me to {showMessage ? 'hide' : 'show'} a message</button>
      {showMessage && <h3>This is showing because you clicked the button!</h3>}
    </div>
  );
};
