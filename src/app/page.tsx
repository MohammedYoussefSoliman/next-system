import Icon from "@components/Icon";
import Typography from "@components/Typography";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <Icon name="search" size={60} />
      <Typography text="this is a typography" />
      <Typography as="h1" text="this is a h1" />
      <Typography as="h4" color="warn" text="this is a h4" />
    </main>
  );
}
