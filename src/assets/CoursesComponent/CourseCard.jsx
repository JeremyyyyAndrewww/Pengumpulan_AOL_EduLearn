import React from 'react';
import './CourseCard.css';

function CourseCard({ items }) {
  return (
    <div className='courseCardContainer'>
      <div className='row justify-content-center'>
        {items.map((val) => (
          <div key={val.title} className='col-md-4 col-sm-6 card my-3 border-0'>
            <div className='card-img-top text-center cardImage' style={{ backgroundImage: `url(${val.img})` }}>
              <div className='cardImageOverlay'></div>
            </div>
            <div className='cardBody'>
              <div className='cardTitle fw-bold fs-4'>
                {val.title} -- {val.category}
              </div>
              <div className='cardText'>
                {val.desc}
              </div>
              <div className='card-footer'>
                <a href={val.link} className='btn btn-primary'>Visit</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
