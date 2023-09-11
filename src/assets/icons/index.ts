import SearchIcon from "./SearchIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import CheckIcon from "./CheckIcon";
import GlobeIcon from "./GlobeIcon";
import VisibleIcon from "./VisibleIcon";
import InVisibleIcon from "./InVisibleIcon";
import MenuIcon from "./MenuIcon";
import TimesIcon from "./TimesIcon";
import MazaadyLogo from "./MazaadyLogo";
import CheckBadgeIcon from "./CheckBadgeIcon";
import TimesBadgeIcon from "./TimesBadgeIcon";
import InfoBadgeIcon from "./InfoBadgeIcon";

export type { SVGProp } from "./icon.types";

const icons = {
  search: SearchIcon,
  check: CheckIcon,
  "chevron-down": ChevronDownIcon,
  globe: GlobeIcon,
  "mazaady-logo": MazaadyLogo,
  visible: VisibleIcon,
  invisible: InVisibleIcon,
  menu: MenuIcon,
  times: TimesIcon,
  "check-badge": CheckBadgeIcon,
  "times-badge": TimesBadgeIcon,
  "info-badge": InfoBadgeIcon,
};

export default icons;
