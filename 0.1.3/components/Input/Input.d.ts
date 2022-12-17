import { InputHTMLAttributes } from 'react';
import '../../assets/styles/reset.css';
import { Theme } from '../../common/type';
interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'className'> {
    theme: Theme;
    value: string;
    onChangeless?: boolean;
    hasError?: boolean;
    errorMessage?: string;
}
export declare function Input({ theme, value, placeholder, hasError, errorMessage, onFocus, onBlur, onChangeless, ...rest }: Props): JSX.Element;
export {};
