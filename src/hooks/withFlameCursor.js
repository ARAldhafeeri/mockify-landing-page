import React, { useState } from "react";
const useWithCUrsor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  
    React.useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
  
      // Clean up event listener on component unmount
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    return (
        <>
            <div className="flame-container">
            <div className="flame" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
            </div>
        </>
      );
};

export default useWithCUrsor;