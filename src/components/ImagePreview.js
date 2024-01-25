import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

const ImageSlideshow = ({ images }) => {
  return (
    <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">User-generated images</h3>
        </div>
        <div className="about-container">
            <ImageGallery items={images} />
        </div>
    </section>
  );
}

ImageSlideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlideshow;