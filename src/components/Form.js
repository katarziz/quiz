import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEntry } from '../actions/entries.js';
import questions from '../res/questions.js';
import infos from '../res/infos.js';

const Form = () => {
  const dispatch = useDispatch();

  const [entryData, setEntryData] = useState([]);

  const handleAnswerButtonClick = (value, answerText) => {
    /*switch (currentQuestion) {
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
    }*/
    //setScore(score + value);
    var inc = 1;
    setEntryData(entryData => [...entryData, { answer: answerText }]);
    switch (currentQuestion) {
      case 0: case 5:
        if (value >= 1)
          inc = 3;
        break;
      case 6: case 10: case 16: case 19:
        setBuffer(value); //init
        break;
      case 11: case 17: case 20:
        setBuffer(buffer * value); //inc
        break;
      case 7: case 12: case 18: case 21:
        setScore(score + (buffer * value)); //send and inc
        break;
      case 8: case 9: case 13: case 14: case 15:
        setScore(score + value); //singles
        break;
      default:
        break;
    }
    switch (currentQuestion + inc) {
      case 5: case 6: case 7:
        setCurrentInfo(0);
      case 8:
        setCurrentInfo(1);
      case 10: case 11: case 12:
        setCurrentInfo(2);
      case 19: case 20: case 21:
        setCurrentInfo(3);
      case 13: case 14: case 15:
        setCurrentInfo(4);
      case 9: case 16: case 17: case 18:
        setCurrentInfo(5);
      case 0: case 1: case 2: case 3: case 4:
        setCurrentInfo(6);
    }
    /*if (currentQuestion === 0 && value > 0) {
      inc = 2;
      setEntryData(entryData => [...entryData, { value: value }]);
      setCurrentInfo(1);
    } else if (currentQuestion === 14 && answerText === 'Ich gehe nicht zur Schule') {
      inc = 2;
      setEntryData(entryData => [...entryData, { value: value }]);
    }*/
    if (inc === 3) {
      setEntryData(entryData => [...entryData, { answer: 'skipped' }, { answer: 'skipped' }]);
    }
    const nextQuestion = currentQuestion + inc;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    /*if (currentQuestion === 15 || (currentQuestion === 14 && inc === 2)) {
      setEntryData(entryData => [...entryData, { score: (score + value) }]);
    }*/
    console.log(buffer, score, value);
  };

  const handleSubmit = (e) => {
    setShowSubmit(false);

    dispatch(createEntry({ ...[...entryData, { score: score }, { v: '1.0' }] }));
  };

  const handleReset = (e) => {
    setCurrentQuestion(0);

    setScore(0);

    setEntryData([]);

    setShowSubmit(true);

    setShowScore(false);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentInfo, setCurrentInfo] = useState(6);

  const [showScore, setShowScore] = useState(false);

  const [showSubmit, setShowSubmit] = useState(true);

  const [score, setScore] = useState(0);

  const [buffer, setBuffer] = useState(0);

  return (
    <>
      {showScore ?
        <>
          <div className='windowed'>
            <h3>
              Mit deinen Angaben haben wir einen CO2-Verbrauch von {score} Kilogramm CO2-Äquivalent errechnen können
            </h3>
            {showSubmit ?
              <button onClick={() => handleSubmit()}>
                Mein Ergebnis absenden
              </button>
              :
              <button disabled>
                Danke, dass Sie Ihr Ergebnis geteilt haben
              </button>
            }
            <button onClick={() => handleReset()}>
              Quiz neu starten
            </button>
            <a href='https://github.com/Humboldt4Future' style={{ width: '100%' }} target="_blank" rel="noreferrer">
              <button style={{ marginLeft: '0' }}>
                Schau dir unseren Code auf Github an
              </button>
            </a>
          </div>
          <div className='windowed'>
            <h2>Unsere Empfehlungen:</h2>
            <a href='https://www.wwf.de/aktiv-werden/tipps-fuer-den-alltag/tipps-zur-plastikvermeidung/plastik-im-alltag-vermeiden/'>WWF - Plastik im Alltag vermeiden</a>
            <a href='https://www.greenpeace.de/themen/endlager-umwelt/plastikmuell/10-tipps-fuer-weniger-plastik'>Greenpeace - 10 Tipps für weniger Plastik</a>
            Weitere im Kommen
          </div>
        </>
        :
        <>
          <div className='windowed'>
            <h3>
              {questions[currentQuestion].questionText}
            </h3>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.value, answerOption.answerText)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
            <div>
              Frage {currentQuestion + 1} / {questions.length}
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