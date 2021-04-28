import React from 'react'
import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'

const URL = 'http://localhost:8000/winners'; // Url from dummy json-server

let userName = Math.random().toString(36).substring(2); // create random user name
sessionStorage.setItem('user',userName); // set session for user

function App() {
  const segments = [
    'bedre held næste gang',
    'vundet 50 kr.',
    'vundet 100 kr.',
    'bedre held næste gang',
    'vundet 200 kr.',
    'vundet fri levering',
    'bedre held næste gang',
    'vundet en T-Shirt'
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
