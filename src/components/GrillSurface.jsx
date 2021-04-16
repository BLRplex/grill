import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

const GrillSurface = () => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [aspectRatio, setAspectRatio] = useState(1)
  const grillItems = useSelector((state) => state.grill);
  const size = useSelector((state) => state.size);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    setAspectRatio(containerWidth / (size[0] || containerWidth))
  }, [containerWidth, size[0]])

  const handleWindowResize = () => {
    const el = document.getElementById('grill-surface-wrapper')
    
    setContainerWidth(el.clientWidth)
  }

  return (
    <div id="grill-surface-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size[0] * aspectRatio}
        height={size[1] * aspectRatio}>
        {grillItems.map((item) => {
          return (
            <g key={`${item.x}-${item.y}`}>
              <rect
                style={{
                  fill: "#ffeeaa",
                  stroke: "#eedd99"
                }}
                y={item.y * aspectRatio}
                x={item.x * aspectRatio}
                width={item.width * aspectRatio}
                height={item.height * aspectRatio}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default GrillSurface;
