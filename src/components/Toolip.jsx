import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export const Toolip = ({ children, text }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    const tooltip = ref.current;
    if (tooltip) {
      const iconBottom = tooltip.parentElement.getBoundingClientRect().bottom;
      const nearBottom = window.innerHeight - iconBottom < 20; // 20px como umbral
      if (nearBottom) {
        tooltip.classList.add("tooltiptext-top");
        tooltip.classList.remove("tooltiptext-bottom");
      } else {
        tooltip.classList.add("tooltiptext-bottom");
        tooltip.classList.remove("tooltiptext-top");
      }
    }
  };

  return (
    <div className="tooltip" onMouseEnter={handleMouseEnter}>
      {children}
      <span ref={ref} className="tooltiptext">
        {text}
      </span>
    </div>
  );
};
