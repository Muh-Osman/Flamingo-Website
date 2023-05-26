import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Layout } from "./Components";
import { Home, Phones, Computers, Watches, Cameras, Gaming, Tablets, Tvs, Accessories, Rent, ProductDetails, Apple, Samsung, Sony, Canon, Dell, Nintendo, NoMatch } from "./Pages"




const router = createBrowserRouter(
  createRoutesFromElements(
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home/:category/:productId' element={<ProductDetails />} />

              <Route path="phones">
                  <Route index element={<Phones />} />
                  <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="gaming">
                  <Route index element={<Gaming />} />
                  <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="watches">
                    <Route index element={<Watches />} />
                    <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="cameras">
                    <Route index element={<Cameras />} />
                    <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="computers">
                    <Route index element={<Computers />} />
                    <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="tablets">
                    <Route index element={<Tablets />} />
                    <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="tvs">
                      <Route index element={<Tvs />} />
                      <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="accessories">
                    <Route index element={<Accessories />} />
                    <Route path=':brand/:productId' element={<ProductDetails />} />
              </Route>

              <Route path="/rent" element={<Rent />} />

              <Route path="/apple" element={<Apple />} />
              <Route path="/samsung" element={<Samsung />} />
              <Route path="/sony" element={<Sony />} />
              <Route path="/canon" element={<Canon />} />
              <Route path="/dell" element={<Dell />} />
              <Route path="/nintendo" element={<Nintendo />} />

              <Route path="*" element={<NoMatch />} />

           </Route>
    )
  );


const App = () => <RouterProvider router={router} />

export default App