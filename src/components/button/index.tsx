import classNames from 'classnames';
import * as React from 'react';
import classes from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef(
    (
        { children, ...otherProps }: ButtonProps,
        ref: React.Ref<HTMLButtonElement>
    ): React.ReactElement => {
        const { className, disabled, ...restProps } = otherProps;
        const computedClasses = classNames(className, classes.button, {
            [classes.disabled]: disabled,
        });

        return (
            <button
                ref={ref}
                className={computedClasses}
                disabled={disabled}
                {...restProps}>
                { children }
            </button>
        );
    }
);
