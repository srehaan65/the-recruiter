import React from 'react';

const DetailsElement = () => {
  return (
    <div className="details-element">
      <div className="name-initial">S</div>
      <div className="details-element-name">
        <div>Sagar Pradhan</div>
        <div className="description">Quality Assurance</div>
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
        <div className="timestamp">Jan 07 2020 13:29:05</div>
      </div>

      <div className="details-element-addedby">
        <div>Akansha Sharma</div>
        <div className="timestamp"> Jan 08 2020 10:49:25 </div>
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