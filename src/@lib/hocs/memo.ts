import { shallowEquals } from "../equalities";
import React, { ComponentType } from "react";
import { useRef } from "../hooks/useRef";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  const MemoComponent = (props: P) => {
    const memoProps = useRef<P | null>(null);

    if (memoProps.current === null) {
      memoProps.current = props;
      return React.createElement(Component, props);
    }
    if (!_equals(memoProps.current, props)) {
      memoProps.current = props;
      return React.createElement(Component, props);
    }
  };
  return MemoComponent; // React component names must start with an uppercase letter.
}
