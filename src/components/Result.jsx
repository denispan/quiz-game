import React from 'react';
import '../index.scss';

const Result = ({questionQuantiti, correct}) => {
  return (
    <div className="result">
      <img src="/assets/success.png" />
      <h2>Вы правильно ответили на {correct} из {questionQuantiti} вопросов</h2>
      <a href="/" className="btn-again">
        Попробовать снова
      </a>
    </div>
  );
};

export default Result;
