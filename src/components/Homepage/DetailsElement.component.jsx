import React from 'react';

const DetailsElement = (props) => {
    return (
        <div className="details-element">
            <ul>
                <li>Name</li>
                <li>Status</li>
                <li>Stage</li>
                <li>Source</li>
                <li>Added By</li>
                <li>Updated By</li>
            </ul>

            <hr />
        </div>
    )
}

export default DetailsElement;