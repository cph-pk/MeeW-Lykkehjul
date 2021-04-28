import React from 'react'
import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'

const URL = 'http://localhost:8000/winners'; // Url from dummy json-server

let userName = Math.random().toString(36).substring(2); // create random user name
sessionStorage.setItem('user',userName); // set session for user

function App() {
  const segments = [
    'better luck next time',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher'
  ];
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ];

console.log(userName)
  const onFinished = async (winner) => {

    const newWinner = {
      user: sessionStorage.getItem('user'),
      price: winner,
      date: new Date()
    }

    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newWinner),
      headers: { 'content-Type': 'application/json' }
    })


    console.log(winner)
    console.log(JSON.stringify(newWinner))
  }



  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      //winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor='#444'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={true}
      size={290}
      upDuration={500}
      downDuration={33}
    />
  )
}

export default App;
