/// <reference types="react" />
import { Theme } from '../../common/type';
type Props = {
    theme: Theme;
    img: string;
    name?: string;
    seconderyText?: string;
};
export declare function Avatar({ theme, img, name, seconderyText }: Props): JSX.Element;
export {};
