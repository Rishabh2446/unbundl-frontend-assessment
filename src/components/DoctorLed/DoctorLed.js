import "./DoctorLed.css";
import doctorImage from "../../assets/doctorled.png";

function DoctorLed() {
  return (
    <section className="doctor-led">
      <div className="doctor-led-container">

        <div className="doctor-content">
          <h2>
            We are Doctor-led,
            not direct-to-consumer
          </h2>

          <p>
            Every treatment plan is reviewed by expert orthodontists
            ensuring safe and predictable smile transformation.
          </p>
        </div>

        <div className="doctor-image">
          <img src={doctorImage} alt="Doctor" />
        </div>

      </div>
    </section>
  );
}

export default DoctorLed;