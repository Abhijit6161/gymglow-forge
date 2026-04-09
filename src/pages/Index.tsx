import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExercisePlans from "@/components/ExercisePlans";
import DietPlan from "@/components/DietPlan";
import WeeklyRoutine from "@/components/WeeklyRoutine";
import WeightTips from "@/components/WeightTips";
import GymAdvice from "@/components/GymAdvice";
import MembershipForm from "@/components/MembershipForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <ExercisePlans />
    <DietPlan />
    <WeeklyRoutine />
    <WeightTips />
    <GymAdvice />
    <MembershipForm />
    <Footer />
  </>
);

export default Index;
