import "./Difference.css";
import differenceData from "../../data/differenceData ";
import differenceImage from "../../assets/difference-image.png";

function Difference() {
  return (
    <section className="difference">
      <div className="difference-card">

        <div className="difference-left">
          <h2>The Whistle Difference</h2>

          <div className="difference-list">
            {differenceData.map((item) => (
              <div className="difference-item" key={item.id}>
                <div className="difference-icon">
                  {item.id}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="difference-right">
          <img
            src={differenceImage}
            alt="Whistle Difference"
          />
        </div>

      </div>
    </section>
  );
}

export default Difference;