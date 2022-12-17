/// <reference types="react" />
import '../../assets/styles/reset.css';
import { Theme } from '../../common/type';
import { TextAlignType, TextColorType, TextSizeType } from './types';
export type Props = {
    theme: Theme;
    text: string;
    size: TextSizeType;
    color: TextColorType;
    align: TextAlignType;
};
export declare function Text({ theme, size, color, align, text }: Props): JSX.Element;
