import Typography from "@components/Typography";
import Progress from "@/components/Progress";

export default async function Page() {
  return (
    <main className="w-full flex gap-4 flex-col items-center justify-center p-24 flex-1">
      <Typography as="h1" text="title" />
      <Progress progress={0.5} />
    </main>
  );
}
