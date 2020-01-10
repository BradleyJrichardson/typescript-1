import React from "react";
import { TextField, TextFieldWithPropInterface } from "./TextField";
const App: React.FC = () => {
  return (
    <div>
      <TextField text="hello" />
      <TextFieldWithPropInterface
        text="hello"
        person={{ firstName: "", lastName: "" }}
      />
    </div>
  );
};

export default App;

// Control + space inside of text field to see what you can pass to the component
