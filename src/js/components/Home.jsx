import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* Jumbotron */}
            <div className="p-5 mb-4 bg-light">
                <div className="container">
                    <h1 className="display-4 fw-bold">Guatemala!</h1>
                    <p className="lead">Una muestra con ejemplos de Guatemala, destacando lo maravilloso de este lugar a través de su riqueza cultural, sus paisajes llenos de vida y la calidez de su gente. Cada detalle refleja la esencia de un entorno único, donde la tradición y la belleza natural se combinan para crear una experiencia auténtica e inolvidable. Un recorrido que no solo muestra, sino que transmite la magia y el encanto que hacen de este lugar algo verdaderamente especial.</p>
                    <a href="#" className="btn btn-primary btn-lg">Conocer más!</a>
                </div>
            </div>

            {/* Tarjetas */}
            <div className="container">
                <div className="row">
                    <Card
                        imagen="https://images.unsplash.com/photo-1580250642511-1660fe42ad58?w=600&auto=format&fit=crop&q=60"
                        titulo="Paisaje 1"
                        texto="Rincones de Guatemala"
                    />
                    <Card
                        imagen="https://images.unsplash.com/photo-1605265788056-dfea788fb36e?w=600&auto=format&fit=crop&q=60"
                        titulo="Paisaje 2"
                        texto="Rincones de Guatemala"
                    />
                    <Card
                        imagen="https://plus.unsplash.com/premium_photo-1697730136469-11218f94f127?w=600&auto=format&fit=crop&q=60"
                        titulo="Paisaje 3"
                        texto="Rincones de Guatemala"
                    />
                    <Card
                        imagen="https://images.unsplash.com/photo-1584908917822-6799d69a72cc?w=600&auto=format&fit=crop&q=60"
                        titulo="Paisaje 4"
                        texto="Rincones de Guatemala"
                    />
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Home;