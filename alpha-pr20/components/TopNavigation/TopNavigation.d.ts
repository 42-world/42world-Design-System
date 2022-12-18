/// <reference types="react" />
import { Theme } from '../../common/type';
type User = {
    profileLink: string;
    profileImg: any;
};
type links = {
    homeLink: string;
    themeLink: string;
    searchLink: string;
    createLink: string;
    alertLink: string;
};
type Props = {
    theme: Theme;
    links: links;
    user: User;
};
export declare function TopNavigation({ theme, links, user }: Props): JSX.Element;
export {};
