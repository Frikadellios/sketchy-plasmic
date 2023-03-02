// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalLong2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorizontalLong2Icon(props: HorizontalLong2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1354 5"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 3c174.686-1 269.636-.495 447.739 0 179.774.5 279.836.5 454.522 0C1079.11 2.5 1177.31 2.5 1352 3"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HorizontalLong2Icon;
/* prettier-ignore-end */
