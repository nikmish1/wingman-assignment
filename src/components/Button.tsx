import { BUTTON_VARIANTS } from "@/constants";
import { PropsWithChildren } from "react";

type ButtonProps = {
  type?: keyof typeof BUTTON_VARIANTS;
  onClick: () => void;
  disabled: boolean;
};

const Button = ({
  type = BUTTON_VARIANTS.PRIMARY,
  onClick,
  disabled = false,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const buttonVaraintClass = {
    [BUTTON_VARIANTS.PRIMARY]: "bg-primary",
    [BUTTON_VARIANTS.SECONDARY]: "bg-secondary",
    [BUTTON_VARIANTS.ERROR]: "bg-error",
  }[type];
  const disabledClass = disabled ? "bg-disabled text-black" : "";
  return (
    <button
      className={`mr-2 ${buttonVaraintClass} ${disabledClass} text-white px-4 py-2 rounded`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
