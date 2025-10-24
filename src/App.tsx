import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Opportunities from './components/Opportunities';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import RecordedCourses from './components/RecordedCourses';
import FounderMessage from './components/FounderMessage';
import CallToAction from './components/CallToAction';
import LearningEnvironment from './components/LearningEnvironment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsBar />
      <Features />
      <Opportunities />
      <Courses />
      <Testimonials />
      <RecordedCourses />
      <FounderMessage />
      <CallToAction />
      <LearningEnvironment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
