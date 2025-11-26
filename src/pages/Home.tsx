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
import PlacementSuccess from "../components/PlacementSuccess";
import PlacementJourney from "../components/PlacementJourney";
import CertificatesShowcase from "../components/CertificatesShowcase";
import BrochureSection from "../components/Brochure";
import WhatsAppCommunity from "../components/WhatsAppCommunity";

function Home() {
    return (
        <>
            <Hero />
            {/* <StatsBar /> */}
            <Features />
            <Opportunities />
            <HiringPartners />
            <PlacementJourney />
            <PlacementSuccess />
            <Courses />
            <BrochureSection />
            <CertificatesShowcase />
            {/* <CourseOfferSection /> */}
            <RecordedCourses />
            <Testimonials />
            <FounderMessage />
            {/* <CallToAction /> */}
            <LearningEnvironment />
            <WhatsAppCommunity />
            <Contact />
        </>
    );
}

export default Home;
