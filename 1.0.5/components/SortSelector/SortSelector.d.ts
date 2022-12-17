/// <reference types="react" />
import { Theme } from '../../common/type/theme';
type ListProps = {
    text: string;
    link: string;
};
type Props = {
    theme: Theme;
    selectedIndex: number;
    list: ListProps[];
    onClick: React.MouseEventHandler<SVGTextElement>;
};
export declare const SortSelector: ({ list, theme, selectedIndex, onClick }: Props) => JSX.Element;
export {};
