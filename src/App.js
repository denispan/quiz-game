import './index.scss';
import React, {useState} from 'react';
import Game from './components/Game';
import Result from './components/Result';
import {questions} from './const';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  return (
    <div className="App">
      {step !== questions.length ?
        <Game
          step={step}
          setStep={setStep}
          question={question}
          correct={correct}
          setCorrect={setCorrect}
          questionQuantiti={questions.length}
        /> :
        <Result
          correct={correct}
          questionQuantiti={questions.length}
        />
      }
    </div>
  );
}

export default App;
