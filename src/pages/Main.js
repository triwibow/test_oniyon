import Header from "../component/header/Header";
import CarouselSection from "../component/section/CarouselSection";
import ScheduleSection from "../component/section/ScheduleSection";
import WhySection from "../component/section/WhySection";
import ClientSection from "../component/section/ClientSection";
import Footer from "../component/footer/Footer";

const Main = () => {
    return (
        <main>
            <Header />
            <CarouselSection />
            <ScheduleSection /> 
            <WhySection />
            <ClientSection />
            <Footer />
        </main>
    );
}

export default Main;