import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Phones, Computers, Watches, Cameras, Gaming, Tablets, Tvs, Accessories, Rent, ProductDetails, Apple, Samsung, Sony, Canon, Dell, Nintendo, NoMatch } from "./Pages"
import { Header, Navbar, Carousel, HowItWorks, NewSectionShelves, TopBrands, Footer, MobileNavbar, FloatSearchMobile } from "./Sections"
import { MainSiteContainer, CarouselAndShelvesContainer, ShelvesBox } from "./Components"

import ReactGA from "react-ga4"

ReactGA.initialize("G-BT5XWMSP0E")

const App = () => {

  // Load my script
  var loadScript = function (src) {
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  }

  return (
    <>
      <Header />
      <MainSiteContainer>
        <Navbar />
        <CarouselAndShelvesContainer>
          <Carousel />
          <ShelvesBox>
            <Routes>

              <Route path='/' element={<Navigate to="/home" />} />
              <Route path='/home' element={<Home />} />
              <Route path='home/foryou/:productId' element={<ProductDetails />} />
              <Route path='home/mobilephones/:productId' element={<ProductDetails />} />
              <Route path='home/gaming/:productId' element={<ProductDetails />} />
              <Route path='home/smartwatches/:productId' element={<ProductDetails />} />
              <Route path='home/cameras/:productId' element={<ProductDetails />} />
              <Route path='home/computers/:productId' element={<ProductDetails />} />
              <Route path='home/tablets/:productId' element={<ProductDetails />} />
              <Route path='home/tvs/:productId' element={<ProductDetails />} />

              <Route path='/phones' element={<Phones />} />
              <Route path='phones/google/:productId' element={<ProductDetails />} />
              <Route path='phones/samsung/:productId' element={<ProductDetails />} />
              <Route path='phones/apple/:productId' element={<ProductDetails />} />

              <Route path='/gaming' element={<Gaming />} />
              <Route path='gaming/sony/:productId' element={<ProductDetails />} />

              <Route path='/watches' element={<Watches />} />
              <Route path='watches/apple/:productId' element={<ProductDetails />} />

              <Route path='/cameras' element={<Cameras />} />
              <Route path='cameras/canon/:productId' element={<ProductDetails />} />

              <Route path='/computers' element={<Computers />} />
              <Route path='computers/apple/:productId' element={<ProductDetails />} />

              <Route path='/tablets' element={<Tablets />} />
              <Route path='tablets/apple/:productId' element={<ProductDetails />} />

              <Route path='/tvs' element={<Tvs />} />
              <Route path='tvs/lg/:productId' element={<ProductDetails />} />

              <Route path='/accessories' element={<Accessories />} />
              <Route path='accessories/tools/:productId' element={<ProductDetails />} />

              <Route path="/rent" element={<Rent />} />

              <Route path="/apple" element={<Apple />} />
              <Route path="/samsung" element={<Samsung />} />
              <Route path="/sony" element={<Sony />} />
              <Route path="/canon" element={<Canon />} />
              <Route path="/dell" element={<Dell />} />
              <Route path="/nintendo" element={<Nintendo />} />

              <Route path="*" element={<NoMatch />} />
            </Routes>

          </ShelvesBox>
        </CarouselAndShelvesContainer>
      </MainSiteContainer>

      <HowItWorks />
      <NewSectionShelves />
      <TopBrands />
      <Footer />

      <MobileNavbar />
      <FloatSearchMobile />

      {loadScript('main.js')}
    </>
  )
}

export default App