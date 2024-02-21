import React from "react";

interface HeadingProps {
  children?: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  return <h1 className="px-4">{props.children}</h1>;
}
