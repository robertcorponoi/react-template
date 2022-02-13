import clsx from "clsx";
import React from "react";

interface ContainerProps {
    /** The elements to nest in the container. */
    children: React.ReactElement | React.ReactElement[];
    /** Optional class names to pass to the container. */
    className?: string;
}

/**
 * A simple container to limit the max width of items within it.
 * 
 * @param {ContainerProps} props
 */
const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={clsx("max-w-5xl mx-auto", {
            [className || ""]: className,
        })}
        >
            {children}
        </div>
    );
};

export default Container;
