import { useRouter } from "next/navigation";
import trimStart from "lodash/trimStart";

export default function useNavigation() {
  const route = useRouter();

  const navigate = (path: string) => {
    route.push(`${trimStart(path, "/")}`);
  };

  return {
    navigate,
  };
}
