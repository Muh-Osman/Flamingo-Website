import { Outlet } from "react-router-dom";
import { Header, Navbar, Carousel, HowItWorks, NewSectionShelves, TopBrands, Footer, MobileNavbar, FloatSearchMobile } from "../../Sections";
import CarouselAndShelvesContainer from "../CarouselAndShelvesContainer/CarouselAndShelvesContainer";
import MainSiteContainer from "../MainSiteContainer/MainSiteContainer";
import ShelvesBox from "../ShelvesBox/ShelvesBox";


export default function Layout() {
  return (
    <>
      <Header />
      <MainSiteContainer>
        <Navbar />
        <CarouselAndShelvesContainer>
          <Carousel />
          <ShelvesBox>

            <Outlet />

          </ShelvesBox>
        </CarouselAndShelvesContainer>
      </MainSiteContainer>

      <HowItWorks />
      <NewSectionShelves />
      <TopBrands />
      <Footer />

      <MobileNavbar />
      <FloatSearchMobile />
    </>
  );
}
