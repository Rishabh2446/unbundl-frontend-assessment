import "./Result.css";
import resultsData from "../../data/resultData";


function Results() {
  return (
    <section className="results">
      <h2 className="results-title">Results You'll Love</h2>

      <div className="results-container">
        {resultsData.map((item) => (
          <div className="result-card" key={item.id}>
            <div className="image-section">
                <div className="before-after">
                    <div className="image-box">
                    <img src={item.beforeImage} alt="Before" />
                    
                    </div>

                    <div className="image-box">
                    <img src={item.afterImage} alt="After" />
                    
                    </div>
                </div>
            </div>

            <div className="result-details">
              <div className="detail-row">
                <span>Concern</span>
                <span>{item.concern}</span>
              </div>

              <div className="detail-row">
                <span>Treatment Duration</span>
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;