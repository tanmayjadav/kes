import { useTheme } from "@emotion/react";
export const InActiveIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill={theme.primary.darkBlueShade} />
    </svg>
  );
};