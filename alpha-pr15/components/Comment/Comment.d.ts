/// <reference types="react" />
import { Theme } from '../../common/type';
interface Props {
    theme: Theme;
    writerName: string;
    writerImg: string;
    text: string;
    isLike?: boolean;
    likeCount: number;
    createdAt: string;
}
export declare function Comment({ theme, writerName, writerImg, text, isLike, likeCount, createdAt }: Props): JSX.Element;
export {};
