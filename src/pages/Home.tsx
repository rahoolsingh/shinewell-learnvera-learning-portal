
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Features from "../components/Features";
import Opportunities from "../components/Opportunities";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import RecordedCourses from "../components/RecordedCourses";
import FounderMessage from "../components/FounderMessage";
import CallToAction from "../components/CallToAction";
import LearningEnvironment from "../components/LearningEnvironment";
import Contact from "../components/Contact";
import CourseOfferSection from "../components/CourseOfferSection";
import HiringPartners from "../components/HiringPartners";

function Home() {
    return (
        <>
            <Hero />
            {/* <StatsBar /> */}
            <Features />
            {/* <Opportunities /> */}
            <HiringPartners />
            <Courses />
            {/* <CourseOfferSection /> */}
            <RecordedCourses />
            <Testimonials />
            <FounderMessage />
            {/* <CallToAction /> */}
            <LearningEnvironment />
            <Contact />
        </>
    );
}

export default Home;
