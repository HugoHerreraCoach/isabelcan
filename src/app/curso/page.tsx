import Footer from "@/components/Footer";
import CourseIntro from "@/sections/curso/CourseIntro";
import WaitlistForm from "@/sections/curso/WaitlistForm";
import CardsCourse from "@/sections/curso/CardsCourse";
import GoalCourse from "@/sections/curso/GoalCourse";

export default function CoursePage() {
  return (
    <>
      <CourseIntro />
      {/* Pasamos el ID al componente WaitlistForm */}
      <WaitlistForm id="waitlist-form-section"/>
      <CardsCourse/>
      <GoalCourse/>
      <Footer />
    </>
  );
}