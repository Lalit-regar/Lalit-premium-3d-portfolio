import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science & Engineering (AI)</h4>
                <h5>Aravali Institute of Technical Studies (AITS), Udaipur</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Rajasthan Technical University (RTU), Kota. Currently in 3rd semester.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (Senior Secondary)</h4>
                <h5>Government Senior Secondary School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Senior Secondary education with 71%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X (Secondary)</h4>
                <h5>Government Secondary School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Secondary education with 57%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
