import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { CartProvider } from "./context/Context";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <div className="font-roboto">
      <Header />

      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/E-commerce-Furnik/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/E-commerce-Furnik/cart"
              element={
                <Suspense fallback={<Loading />}>
                  <Cart />
                </Suspense>
              }
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
