import React from 'react';
import { Theme } from '../../common/type';
type Props = {
    theme: Theme;
    text: string;
    isSelected: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};
export declare function Chip({ text, isSelected, onClick }: Props): JSX.Element;
export {};
