/// <reference types="react" />
import '../../assets/styles/reset.css';
import { Theme } from '../../common/type';
type TextProps = {
    type: 'text';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};
type LinkProps = {
    type: 'link';
    link: string;
};
type Props = (TextProps | LinkProps) & {
    theme: Theme;
    text: string;
    size: 'normal' | 'small';
    style: 'default' | 'danger' | 'primary';
};
export declare function Button(props: Props): JSX.Element;
export {};
