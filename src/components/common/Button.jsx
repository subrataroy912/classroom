import React from 'react';
import { Link } from 'react-router';

export default function Button(
    {
        btn_name,
        children,
        to,
        type = 'button',
        variant = 'primary',
        size = 'md',
        fullWidth = false,
        isLoading = false,
        disabled = false,
        leftIcon,
        rightIcon,
        onClick,
        className = '',
        ...props
    }) {
    // Base structural styles
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sand-300 active:scale-[0.98] select-none';

    // Palette Variants using your Sand theme
    const variants = {
        // Solid Sand Accent
        primary:
            'bg-sand-300 hover:bg-[#bfa78d] text-white shadow-xs focus:ring-offset-sand-50',
        // Soft Sand / Light Solid
        secondary:
            'bg-sand-100 hover:bg-sand-200 text-[#30261f] shadow-xs focus:ring-offset-sand-50',
        // Outlined with Sand Border
        outline:
            'border border-sand-200 bg-transparent hover:bg-sand-100 text-[#30261f] focus:ring-offset-sand-50',
        // Subtle hover effect
        ghost:
            'bg-transparent hover:bg-sand-100 text-[#665c54] hover:text-[#30261f] focus:ring-transparent',
    };

    // Size Presets
    const sizes = {
        sm: 'px-3 py-1.5 text-xs gap-1.5',
        md: 'px-4 py-2 sm:px-5 sm:py-2.5 text-sm gap-2',
        lg: 'px-6 py-3 text-base gap-2.5',
    };

    const widthStyle = fullWidth ? 'w-full' : 'w-auto';
    const disabledStyle =
        disabled || isLoading
            ? 'opacity-60 cursor-not-allowed pointer-events-none active:scale-100'
            : 'cursor-pointer';

    const combinedClasses = [
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        widthStyle,
        disabledStyle,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    // Content priority: children > btn_name
    const content = (
        <>
            {isLoading ? (
                <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                    />
                </svg>
            ) : (
                leftIcon && <span className="shrink-0">{leftIcon}</span>
            )}

            <span>{children || btn_name}</span>

            {!isLoading && rightIcon && (
                <span className="shrink-0">{rightIcon}</span>
            )}
        </>
    );

    // If a destination URL is provided, render React Router's Link
    if (to && !disabled && !isLoading) {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {content}
            </Link>
        );
    }

    // Otherwise, render a standard native HTML button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={combinedClasses}
            {...props}
        >
            {content}
        </button>
    );
}