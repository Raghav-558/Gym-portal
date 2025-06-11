import ClientSayWithUs from "@/components/common/ClientSayWithUs";
import Header from "@/components/common/Header";
import JoinFitnessPointToday from "@/components/common/JoinFitnessPointToday";
import PricingPlans from "@/components/common/PricingPlans";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <>
      <Header />
      <Instructors />
      <PricingPlans />
      <ClientSayWithUs/>
      <JoinFitnessPointToday/>
    </>
  );
}
