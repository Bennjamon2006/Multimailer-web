import { Link, LinkProps } from "react-router-dom";
import "../styles/Button.css";

const themes = {
  primary: {
    backgroundColor: "#09f",
    color: "#fff",
    hoverBackgroundColor: "#06c",
  },
  light: {
    backgroundColor: "#fff",
    color: "#000",
    hoverBackgroundColor: "#ddd",
  },
  dark: {
    backgroundColor: "#000",
    color: "#fff",
    hoverBackgroundColor: "#333",
  },
};

type Theme = keyof typeof themes;

interface BaseButtonProps {
  theme?: Theme;
}

interface NormalBuuttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  buttonType: "button";
}

interface LinkButtonProps extends LinkProps, BaseButtonProps {
  buttonType: "link";
}

type ButtonProps = NormalBuuttonProps | LinkButtonProps;

export default function Button({
  children,
  buttonType = "button",
  theme = "primary",
  ...rest
}: ButtonProps) {
  const style = themes[theme];
  const className = `button ${rest.className || ""}`;

  if (buttonType === "link") {
    return (
      <Link
        {...(rest as LinkProps)}
        style={
          {
            ...style,
            "--hoverBackgroundColor": style.hoverBackgroundColor,
          } as unknown as React.CSSProperties
        }
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      style={
        {
          ...style,
          "--hoverBackgroundColor": style.hoverBackgroundColor,
        } as unknown as React.CSSProperties
      }
      className={className}
    >
      {children}
    </button>
  );
}
