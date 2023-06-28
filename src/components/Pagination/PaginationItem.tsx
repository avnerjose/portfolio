import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface PaginationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: number;
  isActive?: boolean;
}

export function PaginationItem({
  isActive = false,
  label,
  ...rest
}: PaginationItemProps) {
  return (
    <button
      className={classNames(
        "h-10 w-10 border-2 border-green-400 text-xl rounded-lg cursor-pointer",
        {
          "text-white bg-green-400": isActive,
          "text-gray=500 bg-transparent": !isActive,
        }
      )}
      {...rest}
    >
      {label}
    </button>
  );
}
