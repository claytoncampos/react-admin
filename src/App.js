import React from "react";
import SideBarNav from "./components/SideBarNav";
import "./app.css";
import TopBarNav from "./components/TopBarNav";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import CardCentral from "./components/CardCentral";
import Cardcategorias from "./components/CardCategorias";

export default function App() {
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" class="d-flex flex-column">
          <TopBarNav />
          <SideBarNav />
          <div id="content">
            <div class="container-fluid">
              <div class="row">
                <Cards />
              </div>
              <CardCentral />
              <Cardcategorias />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
