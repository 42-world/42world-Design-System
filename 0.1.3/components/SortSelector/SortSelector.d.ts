import { MouseEventHandler } from 'react';
import { Theme } from '../../common/type/theme';
type ListProps = {
    text: string;
    link: string;
};
type Props = {
    theme: Theme;
    selectedIndex: number;
    list: ListProps[];
    onClick: MouseEventHandler<SVGTextElement>;
};
export declare function SortSelector({ list, theme, selectedIndex, onClick }: Props): JSX.Element;
export {};
