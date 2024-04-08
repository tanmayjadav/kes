import { CustomButton } from "./style";

const PrimaryButton = ({
  label,
  onClick,
  variant,
  disabled = false,
  size,
  start,
  endIcon,
  ...props
}) => {
  return (
    <CustomButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      {...props}
      endIcon={endIcon}
    >
      {label}
    </CustomButton>
  );
};

export default PrimaryButton;
