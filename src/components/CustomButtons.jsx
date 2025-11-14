import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CustomPrevButton = ({ onClick }) => (
  <button className="carousel-control left" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button className="carousel-control right" onClick={onClick}>
    <FaArrowRight />
  </button>
);

export { CustomPrevButton, CustomNextButton };
