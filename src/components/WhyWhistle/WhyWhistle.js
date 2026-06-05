import React from "react";
import { whyWhistleData } from "../../data/whyWhistleData";
import "./WhyWhistle.css";

function WhyWhistle(){
    return (
        <section className="why-whistle">
            <h2 className="section-title">Why Whistle?</h2>

            <div className="cards-container">
                {whyWhistleData.map((item) => (
                <div className="card" key={item.id}>
                    <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    />

                </div>
                ))}
            </div>
        </section>
    );
}
export default WhyWhistle;