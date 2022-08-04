import { Card as Cart } from './styled';

function Card({ img, title, caption, properties, className, onClick }) {
  const trimTitle = title.length > 27 ? title.slice(0, 27).concat('...') : title;

  return (
    <Cart {...properties} className={className} onClick={onClick}>
      <figure className='figure'>
        <img src={img} alt='locaion landscape' className='image' />
      </figure>
      <div className='infoBox'>
        <p className='title' title={title}>
          {trimTitle}
        </p>
        <p className='caption'>{caption}</p>
      </div>
    </Cart>
  );
}

export default Card;
