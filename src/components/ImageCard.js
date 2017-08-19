import React from 'react';

const imageCard = ({title, media}) => (
            <div className="col s6 m3">
                <div className="card">
                    <div className="card-image">
                        <img src={media} alt={title} />
                    </div>
                    <div className="card-content">
                        <span className="card-title">{title}</span>
                    </div>
                </div>
            </div>
);

export default imageCard;