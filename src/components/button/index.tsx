import classNames from 'classnames';
import * as React from 'react';
import classes from './button.module.scss';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = React.forwardRef(
    (
        { children, ...otherProps }: ButtonType & React.PropsWithChildren<ButtonType>,
        ref: React.Ref<HTMLButtonElement & HTMLAnchorElement>
    ): React.ReactElement => {
        const { className, disabled, href, ...restProps } = otherProps;

        const TAG =  href ? 'a' : 'button';
        const computedClasses = classNames(className, classes.button, {
            [classes.disabled]: disabled,
        });

        return (
            <TAG
                ref={ref}
                {...restProps}
                className={computedClasses}
                disabled={href ? disabled : undefined}
                tabIndex={disabled ? -1 : undefined}>
                { children }
            </TAG>
        );
    }
);
