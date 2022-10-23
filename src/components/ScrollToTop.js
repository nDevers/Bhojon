import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("  ", () => {
            if (window.Y > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.To({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="fixed bottom-4 right-4 z-50 bg-error border-gray-50 rounded-md w-10 h-10 text-white cursor-pointer"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ToTop;