import React from 'react';
import '../../styles/index.css'

export const Counter = (props) => { 

  let one = props.seconds;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let six = 0;

  if (props.seconds > 9) {
    two = Math.floor(props.seconds / 10);
    one = props.seconds % 10;

    if (two > 9) {
      three = Math.floor(two / 10);
      two = two % 10;
    
      if (three > 9) {
        four = Math.floor(three / 10);
        three = four % 10;

        if (four > 9) {
          five = Math.floor(four / 10);
          four = five % 10;

          if (five > 9) {
            six = Math.floor(five / 10);
            five = five % 10;
          }
        }
      }
    }
  }

    return (
      <div className="container">
        <div className="clock">🕛</div>
        <div className="num">{six}</div>
        <div className="num">{five}</div>
        <div className="num">{four}</div>
        <div className="num">{three}</div>
        <div className="num">{two}</div>
        <div className="num">{one}</div>
        </div>

    );
  };
  