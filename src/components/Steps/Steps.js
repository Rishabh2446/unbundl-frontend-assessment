import "./Steps.css";
import stepsData from "../../data/stepsData";
import stepImage from "../../assets/steps-image.png";

function Steps() {
  return (
    <section className="steps">
      <div className="steps-card">

        <div className="steps-left">
          <h2>Get your perfect smile in four simple steps</h2>

          <div className="steps-grid">
            {stepsData.map((step) => (
              <div key={step.id} className="step-item">

                <div className="step-number">
                  {step.id}
                </div>

                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

        <div className="steps-right">
          <img src={stepImage} alt="Steps" />
        </div>

      </div>
    </section>
  );
}

export default Steps;