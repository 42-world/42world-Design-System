/// <reference types="react" />
import { Theme } from '../../common/type';
type ListProps = {
    icon: string;
    text: string;
    link: string;
};
type Props = {
    theme: Theme;
    focus: number;
    hasIcon: boolean;
    list: ListProps[];
};
export declare function SideNavigation({ theme, hasIcon, list, focus }: Props): JSX.Element;
export {};
