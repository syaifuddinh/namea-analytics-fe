import { ReactElement } from "react"

const MoneyText = ({
    children,
    className = "",
    positivity = "plus",
    fontSize = "1rem",
    prefix = "",
    fontWeight = 300,
    variant = "default",
    suffixVariant = "default"
}: {
    children: ReactElement,
    className?: string,
    positivity?: "plus"|"minus",
    fontSize?: string,
    prefix?: string,
    fontWeight?: number
    variant?: "default" | "danger" | "warning",
    suffixVariant?: "default" | "plain"
}) => {
  return (
    <div
      className={`money-text flex ${className} leading-6 ${
        variant === "default" ? "text-[var(--white-theme-color)]" : ""
      } ${variant === "danger" ? "text-alert-10" : ""} ${
        variant === "warning" ? "text-warning" : ""
      } `}
      style={{ fontSize, fontWeight }}
    >
      {positivity === "minus" && "-"}
      { prefix }
      <span className={``}>Rp{children}</span>

      { suffixVariant === "plain" && (
          <span>,00</span>
      ) }

      { suffixVariant === "default" && (
          <div
            className={`money-text_suffix ${
              variant === "default" ? "text-[var(--gray-theme-color)]" : ""
            } ${variant === "danger" ? "text-alert-6" : ""}`}
          >
              ,00
          </div>
      ) }
    </div>
  );
};

export default MoneyText;
