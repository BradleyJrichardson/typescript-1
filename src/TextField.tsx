import React, { useState, useRef } from "react";

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
// you can also create another interface to pass

interface Person {
  firstName: string;
  lastName: String;
}

interface TextNode {
  text: string;
}

interface Props {
  text: string;
  ok?: boolean; // question mark notes that props is optional
  i?: number;
  fn?: () => string;
  obj?: {
    f1: string;
    f2: string;
  };
  person: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextFieldWithPropInterface: React.FC<Props> = ({
  handleChange
}) => {
  const [count, setCount] = useState<number | null>(5); // this allowing the type of the state count to be a number or null
  const [string, setString] = useState<TextNode>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
