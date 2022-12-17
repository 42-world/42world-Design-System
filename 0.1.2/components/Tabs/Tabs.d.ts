import React from 'react';
import { Theme } from '../../common/type';
type Props = {
    theme: Theme;
    label: string[];
    children: React.ReactChild[];
    align: 'left' | 'center';
};
export declare function Tabs({ label, children, align, theme }: Props): JSX.Element;
export {};
