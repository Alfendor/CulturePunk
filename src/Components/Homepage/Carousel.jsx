/* eslint-disable consistent-return */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Context, { useAppContext } from '../../ContextObj';
import './Carousel.css';
import Pokemon from '../../data/pokemon.json';
import Products from '../../data/products.json';
import Events from '../Calendar/eventsCarousel';
// const slides = Pokemon;
const useTilt = (active) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }
    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };
    const el = ref.current;
    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;
      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);
  return ref;
};
const initialState = {
  slideIndex: 2,
};
const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % 6, // 6 -> slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? 5 : state.slideIndex - 1, // 5 -> slides.length - 1
    };
  }
};

const clickArtist = (id) => {
  // console.log('Artist ID: ', id);
};

const Slide = ({ slide, offset, artistId, showCards }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset > 0 ? offset + 0.1 : offset - 0.1,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {/* Uncomment below to set current background to selected card */}
      {/* <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      /> */}
      <div
        className="slideContent"
        // style={{ backgroundImage: `url('${slide.bkg}')` }}
        style={showCards ? { backgroundImage: `url('${slide.bkg}')` } : { transform: 'perspective(1000px)', backgroundImage: `url('${slide.bkg}')` }}
      >
        <div
          className="slide-image"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle" onClick={() => clickArtist(artistId)}>{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ slideSelect, showCards }) => {
  const {
    users, setUsers, selectedUser, setSelectedUser, items, setItems,
  } = useAppContext();

  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  let prods = [];
  if (slideSelect === 0) prods = Products; // Must update line 61 with current length
  if (slideSelect === 1) prods = Pokemon; // Must update line 68 with current length
  if (slideSelect === 3) prods = Events; //
  if (slideSelect === 4) prods = users[selectedUser].Gallery;
  if (slideSelect === 5) prods = users[selectedUser].Collection;

  return (
    <div className="carousel">
      <div className="slides">
        <button type="button" className="carousel-button" onClick={() => dispatch({ type: 'NEXT' })}>‹</button>
        {[...prods, ...prods, ...prods].map((slide, i) => {
          const offset = prods.length + (state.slideIndex - i);
          return (
            <Slide
              slide={slide}
              showCards={showCards}
              offset={offset}
              artistId={slide.artistId}
              // key={Math.random(100000000)}
            />
          );
        })}
        <button type="button" className="carousel-button" onClick={() => dispatch({ type: 'PREV' })}>›</button>
      </div>
    </div>
  );
};
Carousel.propTypes = {
  slideSelect: PropTypes.number.isRequired,
  // products: PropTypes.arrayOf(PropTypes.object).isRequired,
  // imgAlt: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // desc: PropTypes.string.isRequired,
};
Slide.propTypes = {
  slide: PropTypes.objectOf(PropTypes.string).isRequired,
  offset: PropTypes.number.isRequired,
};
// export default Carousel;
export default React.memo(Carousel);
