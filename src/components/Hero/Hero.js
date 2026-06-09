import "./Hero.css";
import heroImage from "../../assets/hero-image.png"

function Hero() {
    
  return (
    
    <section className="hero">
        <div className="offer-strip">
            Starting at <s>Rs 69,999</s> Rs 47,999. Hurry! Offer ends soon.
        </div>
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                <h1>Invisible Aligners for a dream smile</h1>
                <p>
                    Book a Scan and avail a free Orthodontist Consult
                    <span> worth ₹1500</span>
                </p>
                </div>

                <div className="hero-image">
                <img src={heroImage} alt="Smile" />
                </div>
            </div>

            <div className="hero-form">
                <h2>Do you have Teeth Gaps or Crooked Teeth?</h2>

                <div className="radio-group">
                <label>
                    <input type="radio" name="teeth" />
                    Yes
                </label>

                <label>
                    <input type="radio" name="teeth" />
                    No
                </label>
                </div>

                <div className="form-row">
                <input
                    type="text"
                    placeholder="Full Name*"
                />

                <input
                    type="tel"
                    placeholder="+91 Mobile Number*"
                />

                <button>Book a Free Scan</button>
                </div>

                <div className="checkbox">
                <input type="checkbox" id="consent" />
                <label htmlFor="consent">
                    I hereby consent to receive calls/messages from
                    Whistle and its partners.
                </label>
                </div>
            </div>
            </div>
    </section>
  );
}

export default Hero;