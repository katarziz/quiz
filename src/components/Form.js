import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEntry } from '../actions/entries.js';
import questions from '../res/questions.js';
import infos from '../res/infos.js';

const Form = () => {
  const dispatch = useDispatch();

  const [entryData, setEntryData] = useState([]);

  const handleAnswerButtonClick = (value, answerText) => {
    switch (currentQuestion) {
      case 0: case 15:
        setCurrentInfo(0);
        break;
      case 1: case 2: case 3:
        setCurrentInfo(1);
        break;
      case 4: case 5:
        setCurrentInfo(2);
        break;
      case 6: case 7:
        setCurrentInfo(3);
        break;
      case 8: case 9:
        setCurrentInfo(4);
        break;
      case 10: case 11: case 12:
        setCurrentInfo(5);
        break;
      case 13: case 14:
        setCurrentInfo(6);
        break;
      default:
        break;
    }
    setScore(score + value);
    var inc = 1;
    setEntryData(entryData => [...entryData, { answer: answerText }]);
    if (currentQuestion === 0 && value > 0) {
      inc = 2;
      setEntryData(entryData => [...entryData, { value: value }]);
      setCurrentInfo(1);
    } else if (currentQuestion === 14 && answerText === 'Ich gehe nicht zur Schule') {
      inc = 2;
      setEntryData(entryData => [...entryData, { value: value }]);
    }
    const nextQuestion = currentQuestion + inc;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    if (currentQuestion === 15||(currentQuestion === 14 && inc === 2)) {
      setEntryData(entryData => [...entryData, { score: (score + value) }]);
    }
  };

  const handleSubmit = (e) => {
    setShowSubmit(false);

    dispatch(createEntry({ ...entryData }));
  };

  const handleReset = (e) => {
    setCurrentQuestion(0);

    setScore(0);

    setEntryData([]);

    setShowSubmit(true);

    setShowScore(false);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentInfo, setCurrentInfo] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [showSubmit, setShowSubmit] = useState(true);

  const [score, setScore] = useState(0);

  return (
    <>
      {showScore ?
        <>
          <div className='windowed'>
            Du hast einen UmweltScore von {Math.round(score/76*100)} Prozent erreicht
            {showSubmit ?
              <button onClick={() => handleSubmit()}>
                Mein Ergebnis absenden
              </button>
              :
              <button disabled>
                Danke, dass sie ihr Ergebnis geteilt haben
              </button>
            }
            <button onClick={() => handleReset()}>
              Restart the Quiz
            </button>
            <a href='https://github.com/Humboldt4Future'>
              <button>
                Schau dir unseren Code auf Github an
              </button>
            </a>
          </div>
          <div className='windowed'>
            <h2>Unsere Quellen:</h2>
            <a href='https://www.wwf.de/aktiv-werden/tipps-fuer-den-alltag/tipps-zur-plastikvermeidung/plastik-im-alltag-vermeiden/'>WWF - Plastik im Alltag vermeiden</a>
            <a href='https://www.greenpeace.de/themen/endlager-umwelt/plastikmuell/10-tipps-fuer-weniger-plastik'>Greenpeace - 10 Tipps für weniger Plastik</a>
          </div>
        </>
        :
        <>
          <div className='windowed'>
            <div>
              {questions[currentQuestion].questionText}
            </div>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.value, answerOption.answerText)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
            <div>
              <span> Question {currentQuestion + 1}&nbsp; </span> / {questions.length}
            </div>
          </div>
          <div className='windowed'>
            {infos[currentInfo].text}
          </div>
        </>
      }
    </>
  );
};

export default Form;