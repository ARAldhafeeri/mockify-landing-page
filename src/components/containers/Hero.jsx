import React, { useEffect, useState} from 'react';
import { TypeWriterArray } from '../../hooks/typing';
import Card from '../common/Card/Card';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { cards } from './cards';
import herobg from "../../assets/hero.png"
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

 export default function Hero() {
    const [enableManualToggle, setEnableManualToggle] = React.useState(false);
    const toggleRef = React.useRef();

    toggleRef.current = { checked: false}
    const windowWidth = window.innerWidth;
    
    
    const sentences = [
        { pos: false, text: "Simplified Complexity!" },
        { pos: true, text: " Instants Endpoints..." },
        { pos: false, text: "Bypass SDLCs Bottlenecks!" },
        { pos: true, text: " SHIP 10x FASTER FOR FREE FOR EVER..." },
      ]
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
  <div id="hero" className=" text-white md:grid md:grid-cols-2 m-5" style={{
    backgroundImage: `url(${herobg})`,
    backgroundRepeat: 'no-repeat',
  }}>
    <div className="max-w-[800px]  w-full h-full mt-10 mx-auto md:text-left text-center flex flex-col space-y-4">
      <p className="text-[#00df9a] md:text-4xl text-2xl font-bold p-2"> Empower Your Team</p>
      <p className="md:text-3xl text-1xl w-70 text-center md:text-left ">
      Accelerate your development process with putting API-First design  
      </p>
      <TypeWriterArray sentences={sentences} delay={40} />
      <div className="max-w-[800px] space-y-4">
        <button
          onClick={() => navigate('/docs')}
          className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black hover:bg-[#12a174]"
        >
          Get started
        </button>
      </div>
    </div>
    <div className='md:grid md:grid-cols-[100px_auto] gap-1 '>
      
      <div className="thumbnails md:flex md:flex-col">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => skipToCard(card.id)}
            className="thumbnail-container m-2"
          >
            <img
              src={card.image}
              alt={card.header}
              className="md:w-[75px] md:h-[75px] w-[50px] h-[50px] shadow-[#12a174] bg-[#000300] shadow-md rounded-xl hover:scale-110"
            />
            <div
              className={`active-indicator ${
                card.id === activeCardIndex ? 'active' : null
              }`}
            />
          </motion.div>
        ))}
      </div>
      <div className="slider-container ml-14">
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
    </ div>         
  </div>
  )
}
