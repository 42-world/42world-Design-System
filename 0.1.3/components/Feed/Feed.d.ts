import { MouseEventHandler } from 'react';
import { Theme } from '../../common/type';
type Props = {
    theme: Theme;
    writerName: string;
    writerImg: string;
    title: string;
    contents: string;
    isLike?: boolean;
    likeCount: number;
    commentCount: number;
    createdAt: string;
    onLikeClick?: MouseEventHandler<HTMLDivElement>;
};
export declare function Feed({ theme, writerName, writerImg, title, contents, isLike, likeCount, commentCount, createdAt, onLikeClick, }: Props): JSX.Element;
export {};
