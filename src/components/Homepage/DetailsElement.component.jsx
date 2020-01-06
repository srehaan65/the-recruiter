import React from 'react';

const DetailsElement = () => {
  return (
    <div className="details-element">
      <div className="details-element-name">
        <div>Sagar Pradhan</div>
        <div>Quality Assurance</div>
      </div>

      <div className="details-element-status">
        Applied
      </div>

      <div className="details-element-stage">
        All Candidates
      </div>

      <div className="details-element-source">
        Indeed Today
      </div>

      <div className="details-element-addedby">
        <div>Akansha Sharma</div>
        <div>Timestamp {Date.now()}</div>
      </div>

      <div className="details-element-addedby">
        <div>Akansha Sharma</div>
        <div>Timestamp {Date.now()}</div>
      </div>

      <div className="details-element-icons">
        <img 
        src="/images/envelope.png" alt="plus" height="15px"
          style={{ opacity: "0.45" }} >

        </img>

        <img 
        src="/images/calendar.png" alt="plus" height="15px"
          style={{ opacity: "0.45" }} >

        </img>

        <img 
        src="/images/icon.png" alt="plus" height="15px"
          style={{ opacity: "0.45" }} >

        </img>
      </div>

    </div>
  )
}

export default DetailsElement;