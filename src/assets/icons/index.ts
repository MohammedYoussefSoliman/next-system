import SearchIcon from "./SearchIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import CheckIcon from "./CheckIcon";
import GlobeIcon from "./GlobeIcon";
import VisibleIcon from "./VisibleIcon";
import InVisibleIcon from "./InVisibleIcon";
import MazaadyLogo from "./MazaadyLogo";

export type { SVGProp } from "./icon.types";

const icons = {
  search: SearchIcon,
  check: CheckIcon,
  "chevron-down": ChevronDownIcon,
  globe: GlobeIcon,
  "mazaady-logo": MazaadyLogo,
  visible: VisibleIcon,
  invisible: InVisibleIcon,
};

export default icons;
