import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Phones, Computers, Watches, Cameras, Gaming, Tablets, Tvs, Accessories, Rent, ProductDetails, Apple, Samsung, Sony, Canon, Dell, Nintendo, NoMatch } from "./Pages"
import { Header, Navbar, Carousel, HowItWorks, NewSectionShelves, TopBrands, Footer, MobileNavbar, FloatSearchMobile } from "./Sections"
import { MainSiteContainer, CarouselAndShelvesContainer, ShelvesBox } from "./Components"

// Import Home Page Data
import ForYouData from './Data/HomeData/ForYouData'
import MobilePhoneData from './Data/HomeData/MobilePhonesData'
import GamingData from './Data/HomeData/GamingData'
import SmartWatchesData from './Data/HomeData/SmartWatchesData'
import CamerasData from './Data/HomeData/CamerasData'
import ComputersData from './Data/HomeData/ComputersData'
import TabletsData from './Data/HomeData/TabletsData'
import TvsData from './Data/HomeData/TvsData'

// Import Phones Page Data
import GooglePhonesData from './Data/PhonesData/GooglePhonesData'
import SamsungPhonesData from './Data/PhonesData/SamsungPhonesData'
import ApplePhonesData from './Data/PhonesData/ApplePhonesData'

// Import Gaming Page Data
import SonyGamingData from './Data/GamingData/SonyGamingData'
// Import Watches Page Data
import AppleWatchesData from './Data/WatchesData/AppleWatchesData'
// Import Cameras Page Data
import CanonCamerasData from './Data/CamerasData/CanonCamerasData'
// Import Computers Page Data
import AppleComputersData from './Data/ComputersData/AppleComputersData'
// Import Tablets Page Data
import AppleTabletsData from './Data/TabletsData/AppleTabletsData'
// Import TVs Page Data
import LgTvsData from './Data/ttData/LgTvsData'
// Import Accessories Page Data
import ToolsData from './Data/AccessoriesData/ToolsData'


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
              <Route path='home/foryou/:productId' element={<ProductDetails item={ForYouData} />} />
              <Route path='home/mobilephones/:productId' element={<ProductDetails item={MobilePhoneData} />} />
              <Route path='home/gaming/:productId' element={<ProductDetails item={GamingData} />} />
              <Route path='home/smartwatches/:productId' element={<ProductDetails item={SmartWatchesData} />} />
              <Route path='home/cameras/:productId' element={<ProductDetails item={CamerasData} />} />
              <Route path='home/computers/:productId' element={<ProductDetails item={ComputersData} />} />
              <Route path='home/tablets/:productId' element={<ProductDetails item={TabletsData} />} />
              <Route path='home/tvs/:productId' element={<ProductDetails item={TvsData} />} />

              <Route path='/phones' element={<Phones />} />
              <Route path='phones/google/:productId' element={<ProductDetails item={GooglePhonesData} />} />
              <Route path='phones/samsung/:productId' element={<ProductDetails item={SamsungPhonesData} />} />
              <Route path='phones/apple/:productId' element={<ProductDetails item={ApplePhonesData} />} />

              <Route path='/gaming' element={<Gaming />} />
              <Route path='gaming/sony/:productId' element={<ProductDetails item={SonyGamingData} />} />

              <Route path='/watches' element={<Watches />} />
              <Route path='watches/apple/:productId' element={<ProductDetails item={AppleWatchesData} />} />

              <Route path='/cameras' element={<Cameras />} />
              <Route path='cameras/canon/:productId' element={<ProductDetails item={CanonCamerasData} />} />

              <Route path='/computers' element={<Computers />} />
              <Route path='computers/apple/:productId' element={<ProductDetails item={AppleComputersData} />} />

              <Route path='/tablets' element={<Tablets />} />
              <Route path='tablets/apple/:productId' element={<ProductDetails item={AppleTabletsData} />} />

              <Route path='/tvs' element={<Tvs />} />
              <Route path='tvs/lg/:productId' element={<ProductDetails item={LgTvsData} />} />

              <Route path='/accessories' element={<Accessories />} />
              <Route path='accessories/tools/:productId' element={<ProductDetails item={ToolsData} />} />

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