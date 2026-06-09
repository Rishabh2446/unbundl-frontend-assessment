import "./Pricing.css";
import whistleBox from "../../assets/whistle-box.png";

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">

        <div className="pricing-left">
          <h2>Dream smiles achieved secretly</h2>

          <p>
            Experience the superior quality of our Whistle Aligners
            crafted with 3-layer PU material. With 450+ clinics
            nationwide, enjoy comfortable treatment by expert
            orthodontists at House of Clove.
          </p>

          <p>
            The pricing is different for every case. Cases with
            higher complexity require more aligners and additional
            time and effort from our dentists.
          </p>
        </div>

        <div className="pricing-card">

          <h3>Whistle Aligners</h3>

          <div className="price-wrapper">
            <span className="old-price">₹84,000</span>

            <div className="new-price">
              starting at <span>₹47,999</span>
            </div>

            <small>inc. of all taxes</small>
          </div>

          <ul>
            <li>✔ Offer valid for a limited time</li>
            <li>✔ Easy financing options</li>
          </ul>

          <div className="pricing-footer">
            <a href="/">Learn more →</a>

            <img
              src={whistleBox}
              alt="Whistle Box"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;