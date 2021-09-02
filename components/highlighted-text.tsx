import { FunctionComponent } from "react";
import config from "../tailwind.config";

const alienColor = config.theme.extend.colors.alien;

const HighlightedText: FunctionComponent = ({ children }) => (
  <span
    style={{
      background: `linear-gradient(to top, transparent 12%, ${alienColor} 12%, ${alienColor} 65%, transparent 65%)`,
    }}
  >
    {children}
  </span>
);

export default HighlightedText;
