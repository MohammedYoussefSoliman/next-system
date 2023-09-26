import Container from "@components/Container";
import Paper from "@components/Paper";
import Banner from "@/components/Banner";
import RegisterHeader from "../components/RegisterHeader";
import VerifyComponent from "../components/VerifyComponent";

export default async function Page() {
  return (
    <main className="flex flex-col items-center flex-1 w-full mt-16">
      <Container spacing={4}>
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-2 items-center">
          <Paper className="flex flex-col items-center  gap-2 md:w-2/5 h-fit">
            <RegisterHeader page="verify-email" />
            <VerifyComponent mode="email" />
          </Paper>
          <div className="w-full md:w-1/2">
            <Banner />
          </div>
        </div>
      </Container>
    </main>
  );
}
