"use client";
import "./index.style.css";

const Card = ({
  children,
  headerElement,
  className = "",
  paddingBottom = "6px",
  paddingTop = "4px",
  topRadius="16px",
  bottomRadius="16px",
  isUsePaddingBottom = true,
  isDividerVisible = true,
}) => {
  return (
    <div
      className={`card border border-gray-1 ${className}`}
      style={{"paddingTop": paddingTop, "borderTopLeftRadius": topRadius, "borderTopRightRadius": topRadius, "borderBottomLeftRadius": bottomRadius, "borderBottomRightRadius": bottomRadius, paddingBottom: (isUsePaddingBottom === true ? paddingBottom : "0px") }}
    >
      <div className="card_container">
        {headerElement}
        {isDividerVisible === true && (
          <div className="card_divider px-[20px] h-2.5">
            <div className="card_divider__border h-2.5"></div>
          </div>
        )}
        <div className="card_content">{children}</div>
      </div>
    </div>
  );
};

export default Card;
