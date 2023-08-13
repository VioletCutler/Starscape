import React from "react";
import Star from "./Star";

const colors = ["red", "yellow", "blue", "green", 'cyan', 'coral', 'purple'];

const component = (x, y, z, color, keyObj) => {
  return <Star key={keyObj.key} position={[x, y, z]} color={color} />;
};

const componentArray = [];

for (let i = 0; i < colors.length; i++) {
  componentArray.push(component(i, i, i + -10, colors[i], {key: i}));
}

export default function StarGenerator() {
  return (
    <>
      {componentArray.map((component) => {
        return component;
      })}
    </>
  );
}
