import {FC, PropsWithChildren, ReactNode, createElement} from "react";

import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const TestComponent: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  headingType = "h1",
}) => {
  const classes = classNames(className);

  const Heading: FC<Props> = (...props) => {
    return createElement(headingType, props[0]);
  };

  return (
      <Heading className={classes}>{children}</Heading>
  );
};
