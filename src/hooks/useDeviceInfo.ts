import { deviceType, isAndroid, isIOS } from "react-device-detect";
import _get from "lodash/get";

export default function useDeviceInfo() {
  const deviceInfo = {
    platform: isAndroid ? "android" : isIOS ? "ios" : "web",
    device_id: _get(window, "navigator.platform", ""),
    device_type: deviceType,
  };
  return deviceInfo;
}
