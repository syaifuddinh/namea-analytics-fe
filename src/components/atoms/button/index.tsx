import { ReactElement } from "react"
import { IconChevronRight } from "@/components/atoms/Icons"

export default function Button({
    children,
    className = "",
    variant = "default",
    paddingR = "pr-[0.625rem]",
    width = "145px",
    url = "#",
    onClick = () => {},
}: {
    children: ReactElement,
    className?: string,
    variant?: "default"|"link",
    padding?: string,
    url?: string,
    onClick?: () => void
}) {
    return (
        <>
            { variant === "default" && (
                <button
                    className={`button default flex flex-row justify-center rounded-lg border bg-checkbox items-center ${paddingR} pl-[0.625rem] py-2 max-h-[2.25rem] text-gray-10 border-dot-blue text-sm font-light ${className}`}
                    onClick={onClick}
                >
                    {children}
                </button>
            ) }

            { variant === "link" && (
                <a
                    href={url}
                    className={`flex items-center h-[36px] bg-base-bg3 border border-gray-1 rounded-[8px] pl-3 pr-[6px] ${className}`}
                    style={{ width }}
                >
                  <div className="text-gray-6 text-sm font-extralight">
                     { children }
                  </div>

                  <IconChevronRight />
                </a>
            ) }
        </>
    );
}
