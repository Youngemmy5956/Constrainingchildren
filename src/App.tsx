import React from "react";
import "./styles.css";

type PropsA = { customProp: string };

const ComponentA: React.FC<PropsA> = ({ customProp }) => {
  return <div>{customProp}</div>;
};

type Child = React.ReactElement<PropsA>;

type PropsB = { children: Child | Child[] };

const ComponentB: React.FC<PropsB> = ({ children }) => {
  return <div>{children}</div>;
};

export default function App() {
  return (
    <ComponentB>
      <ComponentA customProp="Hello" />
      <p>ComponentB should complain</p>
    </ComponentB>
  );
}
