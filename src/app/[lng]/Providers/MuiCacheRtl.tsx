import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useAppSelector } from "@/hooks";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function MuiCacheRtl({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useAppSelector((state) => state.ui);

  if (language !== "ar") {
    return <>{children}</>;
  }

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
