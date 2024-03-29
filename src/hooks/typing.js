import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
    if (currentIndex < text.length) {
     const interval = setInterval(() => {
        setCurrentText((value) => value + text[currentIndex]);
        setCurrentIndex((value) => value + 1);
      }, delay);

      if(currentIndex === text.length ){
       clearInterval(interval);
    }
    return () => clearInterval(interval);
  }

  }, [currentIndex, delay, text]);

  return <span>{currentText} <span className="text-white animate-ping">|</span></span>;
};

const isSentencesWrittingDone = (currentSentenceIndex, sentences, currentCharacterIndex ) => {
  return currentSentenceIndex === sentences.length - 1 && currentCharacterIndex === sentences[currentSentenceIndex].text.length;
}

const isSentenceDone = (currentSentenceIndex, sentences, currentCharacterIndex ) => {
  return currentCharacterIndex === sentences[currentSentenceIndex].length;
}

export const TypeWriterArray = ({ sentences, delay, toggleHandler}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  useEffect(() => {
    const typeNextSentence = () => {
      setCurrentText('');
      setCurrentCharacterIndex(0);
      setCurrentSentenceIndex((index) => index + 1);
    };

    let isDelete = false;

    const deleteSentence = () => {
      sentences[currentSentenceIndex].text = sentences[currentSentenceIndex].text.slice(0, -1);
      setCurrentText((value) => value.slice(0, -1));
      setCurrentCharacterIndex((value) => value - 1);
    }

    const toggleIsDelete = (currentCharacterIndex, currentSentenceIndex, sentences) => {
      if ( 
          (currentCharacterIndex > 0 )
          && currentCharacterIndex === (sentences[currentSentenceIndex]?.text?.length - 1) 
          && (currentSentenceIndex !== sentences.length - 1)
          ) {
        isDelete = true;
      } else if (currentCharacterIndex === 0) {
        isDelete = false;
      }
    }

    if (currentSentenceIndex < sentences?.length) {
      const interval = setInterval(() => {
        toggleIsDelete(currentCharacterIndex, currentSentenceIndex, sentences)
        if (!isDelete && (currentCharacterIndex < sentences[currentSentenceIndex].text.length)) {
          setCurrentText((value) => value + sentences[currentSentenceIndex].text[currentCharacterIndex]);
          setCurrentCharacterIndex((value) => value + 1);
        } else if (isDelete) {
            // update currentSentence 
            deleteSentence();
        } else {
          typeNextSentence();
          toggleHandler((value) => !value);
        }
      }, delay);

      if (isSentencesWrittingDone(currentSentenceIndex, sentences, currentCharacterIndex)) {
        
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [currentCharacterIndex, currentSentenceIndex, delay, sentences]);
  const color = sentences[currentSentenceIndex].pos ? 'text-[#00df9a]' : 'text-[#ff4d4d]';

  return <span className={color + " text-xl-2 font-bold"}>{currentText} {!isSentencesWrittingDone(currentSentenceIndex, sentences, currentCharacterIndex) && <span className={ color + " animate-ping font-bold"}>|</span> }</span>;
};


export default Typewriter;