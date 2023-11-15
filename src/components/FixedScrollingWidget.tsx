import * as React from "react";

interface FixedScrollingWidgetProps {
  threshold: number;
  children: React.ReactNode;
  containerClassName?: string;
  top?: number;
}

const FixedScrollingWidget: React.FC<FixedScrollingWidgetProps> = ({
  threshold,
  children,
  containerClassName = "",
  top = 30,
}) => {
  const [isFixed, setIsFixed] = React.useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsFixed(currentScrollPos > threshold);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return (
    <div
      className={`fixed-scrolling-widget ${
        isFixed ? "fixed" : ""
      } ${containerClassName}`}
      style={{
        position: isFixed ? "fixed" : "relative",
        top: isFixed ? top : "auto",
      }}
    >
      {children}
    </div>
  );
};

export default FixedScrollingWidget;
