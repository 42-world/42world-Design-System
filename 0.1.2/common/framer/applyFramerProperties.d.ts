/// <reference types="react" />
import { ControlDescription } from 'framer';
import { Theme } from '../type';
type HigherOrderComponent<Props> = (Component: React.ComponentType<Props>, props?: Props) => React.ComponentType<Props>;
type PropertyControlsType<Props extends Record<string, any>> = {
    [K in keyof Props]: ControlDescription<Partial<Props>> & {
        title: string;
    };
};
export declare function applyFramerProperties<Props extends Record<string, any> & {
    theme: Theme;
}>(component: React.ComponentType<Props> | React.ForwardRefExoticComponent<Props> | HigherOrderComponent<Props>, propertyControls: PropertyControlsType<Props>): void;
export {};
