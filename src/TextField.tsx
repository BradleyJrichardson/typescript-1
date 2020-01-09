import React from "react";

// TextField: React.FC - this is specifying that the variable textfield is a
// react functional component

// <{ text: String }> js obj to define what props the component expect

export const TextField: React.FC<{ text: String }> = () => {
  return (
    <div>
      <input />
    </div>
  );
};

// can also be down as below and this seems much better

interface Person {
  firstName: string;
  lastName: String;
}

interface Props {
  text: string;
  ok: boolean;
  i: number;
  fn: () => string;
  obj: {
    f1: string;
    f2: string;
  };
  person: Person;
}

// you can also create another interface to pass into an object

export const TextFieldWithPropInterface: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};
