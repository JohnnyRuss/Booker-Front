import { useState } from 'react';
import { uid } from 'uid';

import styles from './gallery.module.scss';
import Slider from './Slider/Slider';

function Gallery({ images }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [activeSliderModal, setActiveSliderModal] = useState(false);

  function openSliderModal(i) {
    setSliderIndex(i);
    setActiveSliderModal(true);
    document.querySelector('body').style.overflow = 'hidden';
  }

  function closeSliderModal() {
    setActiveSliderModal(false);
    document.querySelector('body').style.overflow = 'scroll';
  }

  function handleSlider(e) {
    e.stopPropagation();
    const direction = e.currentTarget.name;

    if (direction === 'left' && sliderIndex <= 0) return setSliderIndex(images?.url?.length - 1);
    else if (direction === 'left') setSliderIndex((prevState) => (prevState -= 1));
    else if (direction === 'right' && sliderIndex >= images?.url?.length - 1) setSliderIndex(0);
    else if (direction === 'right') setSliderIndex((prevState) => (prevState += 1));
  }

  function handleSliderFromNest(e, i) {
    e.stopPropagation();
    setSliderIndex(i);
  }

  return (
    <div className={styles.gallery}>
      {images?.url?.map((img, i) => (
        <figure className={styles.figure} key={uid(6)}>
          <img
            src={img}
            alt={img}
            className={styles.image}
            onClick={() => openSliderModal(i)}
          />
        </figure>
      ))}
      {activeSliderModal && (
        <Slider
          closeSliderModal={closeSliderModal}
          handleSlider={handleSlider}
          handleSliderFromNest={handleSliderFromNest}
          sliderIndex={sliderIndex}
          images={images?.url}
        />
      )}
    </div>
  );
}

export default Gallery;
