/// <reference types="react" />
import { Theme } from '../../common/type/theme';
type Props = {
    theme: Theme;
    text: string;
    isChecked?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function Checkbox({ theme, text, isChecked, onClick }: Props): JSX.Element;
export {};
