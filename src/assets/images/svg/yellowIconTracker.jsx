import { useTheme } from "@emotion/react";
export const YellowIconTracker = () => {
  const theme = useTheme();
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="14.5" stroke={theme.primary.orange} />
      <circle cx="15" cy="15" r="11" fill={theme.primary.orange} />
    </svg>
  );
};
