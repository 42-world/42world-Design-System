/// <reference types="react" />
import { Theme } from '../../common/type';
import { Icons } from '../../common/type/icons';
type ListProps = {
    icon: Icons;
    text: string;
    link: string;
};
type Props = {
    theme: Theme;
    currentLink: string;
    hasIcon: boolean;
    list: ListProps[];
};
export declare function SideNavigation({ theme, hasIcon, currentLink, list }: Props): JSX.Element;
export {};
