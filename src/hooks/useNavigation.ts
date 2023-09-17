import { useRouter } from "next/navigation";
import { useAppSelector } from "./reduxHooks";
import trimStart from "lodash/trimStart";

export default function useNavigation() {
  const { language } = useAppSelector((state) => state.ui);
  const route = useRouter();

  const navigate = (path: string) => {
    route.push(`${trimStart(path, "/")}`);
  };

  return {
    navigate,
  };
}
