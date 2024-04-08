import React, { useEffect, useState } from 'react';
import Card from '../../common/Card/Card';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { cards } from './cards';

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 0.8,
    opacity: 0,
  }),
  active: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      scale: { type: 'spring', stiffness: 300, damping: 30 },
    },
  },
  exit: direction => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 0.8,
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

const autoSlideInterval = 5000;

export default function Pricing() {
  const navigate = useNavigate();
  const [[cardCount, direction], setCardCount] = useState([0, 0]);

  const activeCardIndex = wrap(0, cards.length, cardCount);

  const swipeToCard = swipeDirection => {
    setCardCount([cardCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (e, dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;

    if (draggedDistance > swipeThreshold) {
      swipeToCard(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToCard(1);
    }
  };

  const skipToCard = cardId => {
    let changeDirection;
    if (cardId > activeCardIndex) {
      changeDirection = 1;
    } else if (cardId < activeCardIndex) {
      changeDirection = -1;
    }
    setCardCount([cardId, changeDirection]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      swipeToCard(1);
    }, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [cardCount]);

  return (
    <div className="overflow-hidden pb-60 mx-auto flex flex-col justify-center items-center border-t-2  border-t-green1 ">
      <div className="max-w-[800px]  w-full h-full mx-auto text-center flex flex-col justify-center items-center space-y-4">
          <p className="text-[#00df9a] md:text-4xl text-2xl font-bold p-2">ACCELERATE</p>
          <p className="md:text-3xl text-1xl w-70 text-white">
            ACCELERATE DEVELOPMENT SPEED BY 10X
          </p>
      </div>
      <>
        <div className="slider-container">
          <div className="slider">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={cardCount}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, dragInfo) => dragEndHandler(e, dragInfo)}
                className="card"
              >
                <Card
                  header={cards[activeCardIndex].header}
                  paragraph={cards[activeCardIndex].paragraph}
                  image={cards[activeCardIndex].image}
                  link={cards[activeCardIndex].link}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="thumbnails">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => skipToCard(card.id)}
              className="thumbnail-container ml-2 mr-2"
            >
              <img
                src={card.image}
                alt={card.header}
                className="md:w-[125px] md:h-[125px] w-[75px] h-[75px] shadow-[#000300] bg-[#000300] shadow-md rounded-xl hover:scale-110"
              />
              <div
                className={`active-indicator ${
                  card.id === activeCardIndex ? 'active' : null
                }`}
              />
            </motion.div>
          ))}
        </div>
      </>
      <div className="max-w-[800px] justify-center text-center items-center mx-auto flex flex-col space-y-4">
        <button
          onClick={() => navigate('/docs')}
          className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black hover:bg-[#12a174]"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
