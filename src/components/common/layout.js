"use client"
import { useLayoutEffect } from "react";

export default function ClassSwitcher({ children, bodyClass }) {
    useLayoutEffect(() => {
        if (bodyClass) {
            document.body.classList.add(...bodyClass.split(" "));
        }

        return () => {
            if (bodyClass) {
                document.body.classList.remove(...bodyClass.split(" "));
            }
        };
    }, [bodyClass]);

    return (
        <main>
            <div className="container">
                {children}
            </div>
        </main>
    );
}
