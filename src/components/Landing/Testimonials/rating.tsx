import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import './rating.css';
interface Props{
  rating:number
}
const Rating: React.FC<Props> = ({ rating })=> {
  const totalRating = [] as any;
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li  className="star" key={`rating-key${i}`}>
          <AiTwotoneStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="star-o" key={`rating-key${i}`}>
          <AiTwotoneStar />
        </li>
      );
    }
  }

  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
