import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
    color: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
}