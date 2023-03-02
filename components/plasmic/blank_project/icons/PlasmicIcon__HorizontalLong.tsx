// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalLongIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorizontalLongIcon(props: HorizontalLongIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1384 5"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 3c178.568-1 275.628-.495 457.688 0 183.769.5 286.056.5 464.624 0C1103.04 2.5 1203.43 2.5 1382 3"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HorizontalLongIcon;
/* prettier-ignore-end */
