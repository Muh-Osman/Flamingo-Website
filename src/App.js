import { Route, Routes, Navigate } from 'react-router-dom'

import { Header, Navbar, Carousel, HowItWorks, NewSectionShelves, TopBrands, Footer, MobileNavbar, FloatSearchMobile } from "./Sections"
import { MainSiteContainer, CarouselAndShelvesContainer, ShelvesBox } from "./Components"
import { Home, Phones, Computers, Watches, Cameras, Gaming, Tablets, Tvs, Tools, ProductDetails, NoMatch } from "./Pages"


import MobilePhoneData from './Data/HomeData/MobilePhonesData'
import CanonItemsData from './Data/CamerasData/CanonData'
import AppleWatchesData from './Data/WatchesData/AppleWatchesData'






const App = () => {


  // Load my script
  var loadScript = function (src) {
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  }

  // const navigate = useNavigate()




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
              <Route path='home/:brand/:productId' element={<ProductDetails item={MobilePhoneData} />} />

              <Route path='/phones' element={<Phones />} />

              <Route path='/gaming' element={<Gaming />} />

              <Route path='/watches' element={<Watches />} />
              <Route path='watches/:brand/:productId' element={<ProductDetails item={AppleWatchesData} />} />

              <Route path='/cameras' element={<Cameras />} />
              <Route path='cameras/:brand/:productId' element={<ProductDetails item={CanonItemsData} />} />

              <Route path='/computers' element={<Computers />} />

              <Route path='/tablets' element={<Tablets />} />

              <Route path='/tvs' element={<Tvs />} />

              <Route path='/tools' element={<Tools />} />

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