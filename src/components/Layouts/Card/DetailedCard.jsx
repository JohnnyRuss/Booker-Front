import { CardDetailed } from './styled';
import { RatingCubic } from '../';

function DetailedCard({ img, title, caption, description, rating, properties, className }) {
  const trimTitle = title?.length > 27 ? title.slice(0, 27).concat('...') : title;

  return (
    <CardDetailed {...properties} className={className}>
      <figure className='figure'>
        <img src={img} alt='locaion landscape' className='image' />
      </figure>
      <div className='infoBox'>
        <p className='title' title={title}>
          {trimTitle}
        </p>
        <p className='caption'>{caption}</p>
        <p className='description'>{description}</p>
        {rating && (
          <div className='rating'>
            <RatingCubic rating={rating.point} />
            <span className='rate'>{rating.rate}</span>
          </div>
        )}
      </div>
    </CardDetailed>
  );
}

export default DetailedCard;
