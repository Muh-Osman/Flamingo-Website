import './HomeShelves.css'
import { ShelvesBox, ShelveConainer, ItemShelves } from '../../Components'

const HomeShelves = () => {
    return (

        <>

            <ShelvesBox>

                <ShelveConainer>

                    <ItemShelves />

                </ShelveConainer>

            </ShelvesBox>
        </>


        // <section className="shelves-box">
        //     <div className="contin-product">



        //         {/* <!-- For you shelves --> */}
        //         {/* <div className="for-you shelves">
        //             <div className="shelve-cont">
        //                 <div className="shelve-title">
        //                     <a href='https://www.google.com/'>For you</a>
        //                 </div>
        //                 <div className="items-scroller" tabIndex="0">


        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/ps5.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Sony PlayStation 5 DualSense Controller with DualSense Controller</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/80D.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Canon DSLR Camera EOS 80D (4K Video)</h4>
        //                                 <h5>
        //                                     <span className="price">149</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/mac.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple MacBook Pro M1 Max chip 16GB RAM</h4>
        //                                 <h5>
        //                                     <span className="price">139</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/mini.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple iPad Mini (Wi-Fi, 64GB) - Starlight</h4>
        //                                 <h5>
        //                                     <span className="price">49</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/iphone.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple iPhone 13 Pro (128GB) - Dual SIM</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/ps5.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Sony PlayStation 5 DualSense Controller with DualSense Controller</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/80D.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Canon DSLR Camera EOS 80D (4K Video)</h4>
        //                                 <h5>
        //                                     <span className="price">149</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/mac.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple MacBook Pro M1 Max chip 16GB RAM</h4>
        //                                 <h5>
        //                                     <span className="price">139</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/mini.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple iPad Mini (Wi-Fi, 64GB) - Starlight</h4>
        //                                 <h5>
        //                                     <span className="price">49</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/for you/iphone.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple iPhone 13 Pro (128GB) - Dual SIM</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div> */}

        //         {/* <!-- Mobile Phone shelves --> */}
        //         {/* <div className="phones shelves">
        //             <div className="shelve-cont">
        //                 <div className="shelve-title">
        //                     <a href='https://www.google.com/'>Mobile Phones</a>
        //                 </div>


        //                 <div className="items-scroller" tabIndex="0">

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/iphone.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple iPhone 12 Pro (128GB) - Dual SIM</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/s22.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG Galaxy S22 FE 5G</h4>
        //                                 <h5>
        //                                     <span className="price">89</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/fold.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG Galaxy Z Fold 3 128GB - Dual SIM</h4>
        //                                 <h5>
        //                                     <span className="price">144</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/flip.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG ZFlip 3 SAMSUNG Electronics Galaxy ZFlip 3 5G</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/pixel.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Google Pixel 5a 128GB, 6GB RAM, 5G</h4>
        //                                 <h5>
        //                                     <span className="price">79</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/iphone.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple iPhone 12 Pro (128GB) - Dual SIM</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/s22.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG Galaxy S22 FE 5G</h4>
        //                                 <h5>
        //                                     <span className="price">89</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/fold.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG Galaxy Z Fold 3 128GB - Dual SIM</h4>
        //                                 <h5>
        //                                     <span className="price">144</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/flip.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG ZFlip 3 Electronics Galaxy ZFlip 3 5G</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/phones/pixel.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Google Pixel 5a 128GB, 6GB RAM, 5G</h4>
        //                                 <h5>
        //                                     <span className="price">79</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div> */}

        //         {/* <!-- Gaming & VR shelves --> */}
        //         {/* <div className="gaming shelves">
        //             <div className="shelve-cont">
        //                 <div className="shelve-title">
        //                     <a href='https://www.google.com/'>Gaming & VR</a>
        //                 </div>

        //                 <div className="items-scroller" tabIndex="0">

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/ps5 controler.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>PlayStation DualSense Wireless Controller DualSense Wireless Controller</h4>
        //                                 <h5>
        //                                     <span className="price">39</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/Battlefield 2042.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Battlefield 2042 - PlayStation 5</h4>
        //                                 <h5>
        //                                     <span className="price">34</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/VR Headset Compatible.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>VR Headset Compatible with iPhone & Android Compatible with iPhone & Android</h4>
        //                                 <h5>
        //                                     <span className="price">59</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/Nintendo Switch.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Nintendo Switch (OLED) White Joy-Con</h4>
        //                                 <h5>
        //                                     <span className="price">70</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/FIFA 22.jpg" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>FIFA 22 - PlayStation 5</h4>
        //                                 <h5>
        //                                     <span className="price">44</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/ps5 controler.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>PlayStation DualSense Wireless Controller DualSense Wireless Controller</h4>
        //                                 <h5>
        //                                     <span className="price">39</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/Battlefield 2042.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Battlefield 2042 - PlayStation 5</h4>
        //                                 <h5>
        //                                     <span className="price">34</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/VR Headset Compatible.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>VR Headset Compatible with iPhone & Android Compatible with iPhone & Android</h4>
        //                                 <h5>
        //                                     <span className="price">59</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/Nintendo Switch.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Nintendo Switch (OLED) White Joy-Con</h4>
        //                                 <h5>
        //                                     <span className="price">70</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/gaming/FIFA 22.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>FIFA 22 - PlayStation 5</h4>
        //                                 <h5>
        //                                     <span className="price">44</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div> */}

        //         {/* <!-- Smart Watches shelves --> */}
        //         {/* <div className="watches shelves">
        //             <div className="shelve-cont">
        //                 <div className="shelve-title">
        //                     <a href='https://www.google.com/'>Smart watches</a>
        //                 </div>

        //                 <div className="items-scroller" tabIndex="0">

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/red.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple Watch Series 7 GPS, 45mm Aluminum</h4>
        //                                 <h5>
        //                                     <span className="price">66</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/Watch Active.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG Galaxy Watch Active2 Silicon Strap</h4>
        //                                 <h5>
        //                                     <span className="price">44</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/Fossil Men.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Fossil Men's Gen 6 Touchscreen Smartwatch</h4>
        //                                 <h5>
        //                                     <span className="price">49</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/Apple Watch Series.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple Watch Series 7 GPS, 45mm Aluminum GPS, 45mm Aluminum</h4>
        //                                 <h5>
        //                                     <span className="price">69</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/HUAWEI WATCH.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>HUAWEI WATCH GT Sport Black Rubber Graphite Black</h4>
        //                                 <h5>
        //                                     <span className="price">49</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/red.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple Watch Series 7 GPS, 45mm Aluminum</h4>
        //                                 <h5>
        //                                     <span className="price">66</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/Watch Active.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>SAMSUNG Galaxy Watch Active2 Silicon Strap</h4>
        //                                 <h5>
        //                                     <span className="price">44</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/Fossil Men.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Fossil Men's Gen 6 Touchscreen Smartwatch</h4>
        //                                 <h5>
        //                                     <span className="price">49</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/Apple Watch Series.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Apple Watch Series 7 GPS, 45mm Aluminum GPS, 45mm Aluminum</h4>
        //                                 <h5>
        //                                     <span className="price">69</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/watches/HUAWEI WATCH.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>HUAWEI WATCH GT Sport Black Rubber Graphite Black</h4>
        //                                 <h5>
        //                                     <span className="price">49</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div> */}

        //         {/* <!-- Cameras Shelves --> */}
        //         {/* <div className="cameras shelves">

        //             <div className="shelve-cont">
        //                 <div className="shelve-title">
        //                     <a href='https://www.google.com/'>Cameras</a>
        //                 </div>

        //                 <div className="items-scroller" tabIndex="0">

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/Sony Alpha A7.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Sony Alpha A7 III Full-Frame Camera 35mm</h4>
        //                                 <h5>
        //                                     <span className="price">199</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/Nikon Coolpix.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Nikon Coolpix B600 Digital Camera, Black</h4>
        //                                 <h5>
        //                                     <span className="price">80</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/Canon RF.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Canon RF 100-500mm F4.5-7.1L IS USM</h4>
        //                                 <h5>
        //                                     <span className="price">199</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/eos 5D.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Canon EOS 5D Mark IV 24-105mm F/4L USM Lens</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/GoPro HERO.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>GoPro HERO9 Black Waterproof Action Camera</h4>
        //                                 <h5>
        //                                     <span className="price">80</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/Sony Alpha A7.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Sony Alpha A7 III Full-Frame Camera 35mm</h4>
        //                                 <h5>
        //                                     <span className="price">199</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/Nikon Coolpix.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Nikon Coolpix B600 Digital Camera, Black</h4>
        //                                 <h5>
        //                                     <span className="price">80</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/Canon RF.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Canon RF 100-500mm F4.5-7.1L IS USM</h4>
        //                                 <h5>
        //                                     <span className="price">199</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/eos 5D.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Canon EOS 5D Mark IV 24-105mm F/4L USM Lens</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/cameras/GoPro HERO.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>GoPro HERO9 Black Waterproof Action Camera</h4>
        //                                 <h5>
        //                                     <span className="price">80</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div> */}

        //         {/* <!-- Computer Shelves --> */}
        //         {/* <div className="computers shelves">

        //             <div className="shelve-cont">
        //                 <div className="shelve-title">
        //                     <a href='https://www.google.com/'>Computers</a>
        //                 </div>

        //                 <div className="items-scroller" tabIndex="0">

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Acer Nitro.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H</h4>
        //                                 <h5>
        //                                     <span className="price">70</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Lenovo Ideapad.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Lenovo Ideapad Laptop With FHD 11.6-Inch</h4>
        //                                 <h5>
        //                                     <span className="price">60</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/HP Laptop.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>HP Laptop 15-da2029nx 15.6" HD, Intel Core i3</h4>
        //                                 <h5>
        //                                     <span className="price">66</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Dell.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Dell XPS 15 FHD+ Intel Core i7-11800H, GeForce RTX 3050Ti 4GB GDDR6</h4>
        //                                 <h5>
        //                                     <span className="price">89</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Apple iMac.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>New Apple iMac Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Acer Nitro.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H</h4>
        //                                 <h5>
        //                                     <span className="price">70</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Lenovo Ideapad.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Lenovo Ideapad Laptop With FHD 11.6-Inch</h4>
        //                                 <h5>
        //                                     <span className="price">60</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/HP Laptop.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>HP Laptop 15-da2029nx 15.6" HD, Intel Core i3</h4>
        //                                 <h5>
        //                                     <span className="price">66</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Dell.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>Dell XPS 15 FHD+ Intel Core i7-11800H, GeForce RTX 3050Ti 4GB GDDR6</h4>
        //                                 <h5>
        //                                     <span className="price">89</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                     <div>
        //                         <a href='https://www.google.com/' className="item-cards">
        //                             <div className="img-of-item">
        //                                 <img src="images/product images/laptop/Apple iMac.jpg" loading="lazy" alt="" />
        //                             </div>
        //                             <div className="item-description">
        //                                 <h4>New Apple iMac Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)</h4>
        //                                 <h5>
        //                                     <span className="price">99</span>
        //                                     <span className="currency">SAR</span>
        //                                     <span className="week">/week</span>
        //                                 </h5>
        //                             </div>
        //                         </a>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div> */}

        //         <BigMoreButton />


        //     </div>
        // </section>
    )
}

export default HomeShelves