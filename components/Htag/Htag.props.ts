import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HtagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
