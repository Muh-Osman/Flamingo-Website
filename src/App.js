import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Navbar, Carousel, HowItWorks, NewSectionShelves, TopBrands, Footer, MobileNavbar, FloatSearchMobile } from "./Sections"
import { MainSiteContainer, CarouselAndShelvesContainer, ShelvesBox } from "./Components"
import { Home, Phones, Computers, Watches, Cameras, Gaming, Tablets, Tvs, Tools, ProductDetails } from "./Pages"

import CanonItemsData from './Data/CamerasData/CanonData'






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

      <Router basename={'/'}>

        <Header />

        <MainSiteContainer>

          <Navbar />

          <CarouselAndShelvesContainer>

            <Carousel />

            <ShelvesBox>

              <Routes>

                <Route path='/' element={<Home />} />

                <Route path='/phones' element={<Phones />} />

                <Route path='/gaming' element={<Gaming />} />

                <Route path='/watches' element={<Watches />} />

                <Route path='/cameras' element={<Cameras />} />
                <Route path='/cameras/:productId' element={<ProductDetails item={CanonItemsData} />} />

                <Route path='/computers' element={<Computers />} />

                <Route path='/tablets' element={<Tablets />} />

                <Route path='/tvs' element={<Tvs />} />

                <Route path='/tools' element={<Tools />} />



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

      </Router>

    </>

  )
}


export default App