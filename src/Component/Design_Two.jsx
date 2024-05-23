import React from 'react'
import vector_smart_object from '../images/vector_smart_object.png';
import vector_smart_object_2 from '../images/vector_smart_object_2.png';

function Design_Two() {
  return (
    <div className="design-2" id='menu'>
    <div className="l-constrained-3 group">
      <img className='postion'
        src={vector_smart_object_2}
        alt=""
        width={243}
        height={400}
      />
      <div className="text-4">
        <p className="title-16">Traditional cuisine made easy</p>
        <p className="body-text-11">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>
        <div className="circles-3 no-space-between-inline-blocks">
          <div className="ellipse-7" />
          <div className="ellipse-8" />
          <div className="ellipse-9" />
        </div>
        <div className="row-2 group">
          <p className="meals">Meals</p>
          <p className="spices">Spices</p>
          <p className="book">Book</p>
          <p className="gallery">Gallery</p>
        </div>
      </div>
      <img
        className="vector-smart-object-2 postion2"
        src={vector_smart_object}
        alt=""
        width={243}
        height={400}
      />
    </div>
  </div>
  )
}

export default Design_Two