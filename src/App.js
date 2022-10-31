import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader"
import { Header, Navbar, Carousel, HowItWorks, NewSectionShelves, TopBrands, Footer, MobileNavbar, FloatSearchMobile } from "./Sections"
import { MainSiteContainer, CarouselAndShelvesContainer, ShelvesBox } from "./Components"
import { Home, Phones, Computers, Watches, Cameras, Gaming, Tablets, Tvs, Tools } from "./Pages"


// Load my script
var loadScript = function (src) {
  var tag = document.createElement('script');
  tag.async = true;
  tag.src = src;
  document.getElementsByTagName('body')[0].appendChild(tag);
}




const App = () => {



  // Loading spinner
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 835)
  }, [])




  return (
    <>


      {/* Loading spinner */}
      {
        loading ?
          <div className="sweet-loading">
            <HashLoader
              color={'#fe1251'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :








          <Router basename={'/'}>

            <Header />

            <MainSiteContainer>

              <Navbar />

              <CarouselAndShelvesContainer>

                <Carousel />

                <ShelvesBox>

                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Phones' element={<Phones />} />
                    <Route path='/Gaming' element={<Gaming />} />
                    <Route path='/Watches' element={<Watches />} />
                    <Route path='/Cameras' element={<Cameras />} />
                    <Route path='/Computers' element={<Computers />} />
                    <Route path='/Tablets' element={<Tablets />} />
                    <Route path='/Tvs' element={<Tvs />} />
                    <Route path='/Tools' element={<Tools />} />
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


      }

    </>

  )
}


export default App