// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oPnLo9YFrSohtmv62Gxwtz
// Component: NqwvW_PiMx
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: oPnLo9YFrSohtmv62Gxwtz/projectcss
import sty from "./PlasmicLargeeFreeBox.module.css"; // plasmic-import: NqwvW_PiMx/css

import HorizontalMediumIcon from "./icons/PlasmicIcon__HorizontalMedium"; // plasmic-import: AGjwKRG33l/icon
import HorizontalMedium2Icon from "./icons/PlasmicIcon__HorizontalMedium2"; // plasmic-import: a7X9U6VjkL/icon
import HorizontalMedium3Icon from "./icons/PlasmicIcon__HorizontalMedium3"; // plasmic-import: ysZ_aw-Xs6/icon
import HorizontalMedium4Icon from "./icons/PlasmicIcon__HorizontalMedium4"; // plasmic-import: QyEYPm0gsC/icon

export type PlasmicLargeeFreeBox__VariantMembers = {};
export type PlasmicLargeeFreeBox__VariantsArgs = {};
type VariantPropType = keyof PlasmicLargeeFreeBox__VariantsArgs;
export const PlasmicLargeeFreeBox__VariantProps = new Array<VariantPropType>();

export type PlasmicLargeeFreeBox__ArgsType = {};
type ArgPropType = keyof PlasmicLargeeFreeBox__ArgsType;
export const PlasmicLargeeFreeBox__ArgProps = new Array<ArgPropType>();

export type PlasmicLargeeFreeBox__OverridesType = {
  large?: p.Flex<"div">;
  verticalMedium?: p.Flex<"div">;
  verticalMedium2?: p.Flex<"div">;
};

export interface DefaultLargeeFreeBoxProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLargeeFreeBox__RenderFunc(props: {
  variants: PlasmicLargeeFreeBox__VariantsArgs;
  args: PlasmicLargeeFreeBox__ArgsType;
  overrides: PlasmicLargeeFreeBox__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"large"}
      data-plasmic-override={overrides.large}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.large
      )}
    >
      <HorizontalMediumIcon
        className={classNames(projectcss.all, sty.svg___4Wvtt)}
        role={"img"}
      />

      <HorizontalMedium2Icon
        className={classNames(projectcss.all, sty.svg__iRiE)}
        role={"img"}
      />

      <div
        data-plasmic-name={"verticalMedium"}
        data-plasmic-override={overrides.verticalMedium}
        className={classNames(projectcss.all, sty.verticalMedium)}
      >
        <HorizontalMedium3Icon
          className={classNames(projectcss.all, sty.svg__uyy6E)}
          role={"img"}
        />
      </div>

      <div
        data-plasmic-name={"verticalMedium2"}
        data-plasmic-override={overrides.verticalMedium2}
        className={classNames(projectcss.all, sty.verticalMedium2)}
      >
        <HorizontalMedium4Icon
          className={classNames(projectcss.all, sty.svg___7Becj)}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  large: ["large", "verticalMedium", "verticalMedium2"],
  verticalMedium: ["verticalMedium"],
  verticalMedium2: ["verticalMedium2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  large: "div";
  verticalMedium: "div";
  verticalMedium2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLargeeFreeBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLargeeFreeBox__VariantsArgs;
    args?: PlasmicLargeeFreeBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLargeeFreeBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLargeeFreeBox__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLargeeFreeBox__ArgProps,
          internalVariantPropNames: PlasmicLargeeFreeBox__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLargeeFreeBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "large") {
    func.displayName = "PlasmicLargeeFreeBox";
  } else {
    func.displayName = `PlasmicLargeeFreeBox.${nodeName}`;
  }
  return func;
}

export const PlasmicLargeeFreeBox = Object.assign(
  // Top-level PlasmicLargeeFreeBox renders the root element
  makeNodeComponent("large"),
  {
    // Helper components rendering sub-elements
    verticalMedium: makeNodeComponent("verticalMedium"),
    verticalMedium2: makeNodeComponent("verticalMedium2"),

    // Metadata about props expected for PlasmicLargeeFreeBox
    internalVariantProps: PlasmicLargeeFreeBox__VariantProps,
    internalArgProps: PlasmicLargeeFreeBox__ArgProps
  }
);

export default PlasmicLargeeFreeBox;
/* prettier-ignore-end */
