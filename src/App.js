import './App.css';
import {useEffect} from 'react';

function handleClickButtonOne() {
  const buttonOne = document.querySelector('.button-one');
  const buttonOneData = buttonOne.getAttribute('data-state');
  if (!buttonOneData || buttonOneData === 'closed') {
    buttonOne.setAttribute('data-state', 'opened')
  } else {
    buttonOne.setAttribute('data-state', 'closed')
  }
}

function handleClickButtonTwo() {
  const buttonTwo = document.querySelector('.button-two');
  const buttonTwoData = buttonTwo.getAttribute('data-state');
  if (!buttonTwoData || buttonTwoData === 'closed') {
    buttonTwo.setAttribute('data-state', 'opened')
  } else {
    buttonTwo.setAttribute('data-state', 'closed')
  }
}

function handleClickButtonThree() {
  const buttonThree = document.querySelector('.button-three');
  const buttonThreeData = buttonThree.getAttribute('data-state');
  if (!buttonThreeData || buttonThreeData === 'closed') {
    buttonThree.setAttribute('data-state', 'opened')
  } else {
    buttonThree.setAttribute('data-state', 'closed')
  }
}

function handleMouseEnter(e) {
  const hoveredElement = document.querySelector(`.${e}`);
  const hoveredElementData = hoveredElement.getAttribute('data-state');
  if (!hoveredElementData) {
    hoveredElement.setAttribute('data-state', 'activated');
    console.log(hoveredElement);
  } else {
    const randomColor = Math.floor(Math.random() * 999999);
    const randomColor2 = Math.floor(Math.random() * 999999);
    console.log(randomColor);
    console.log(randomColor2)
    hoveredElement.style.setProperty('--random-color', `#${randomColor}`);
    hoveredElement.style.setProperty('--random-color-2', `#${randomColor2}`);
  }
}



function App() {
  return (
    <div className="App">
      <form className='color-picker' action=''>
        <fieldset>
          <legend className='visually-hidden'>Pick a color scheme</legend>
          <label htmlFor='light' className='visually-hidden'>Light Theme</label>
          <input 
            type='radio' 
            name='theme' 
            id='light'
            defaultChecked
          >
          </input>
          <label htmlFor='dark' className='visually-hidden'>Dark Theme</label>
          <input 
            type='radio' 
            name='theme' 
            id='dark'
          >
          </input>
          <label htmlFor='pink' className='visually-hidden'>Pink Theme</label>
          <input 
            type='radio' 
            name='theme' 
            id='pink'
          >
          </input>
          <label htmlFor='blue' className='visually-hidden'>Blue Theme</label>
          <input 
            type='radio' 
            name='theme' 
            id='blue'
          >
          </input>
          <label htmlFor='green' className='visually-hidden'>Green Theme</label>
          <input 
            type='radio' 
            name='theme' 
            id='green'
          >
          </input>
        </fieldset>
      </form>
      <div className='svg-container'>
        <button className='button-one' onClick={handleClickButtonOne}>
          <svg fill='var(--color-button-one)' className='hamburger' viewBox='0 0 100 100' width='250'>
            <rect className='line top' width='80' height='10' x='10' y='25' rx='5'></rect>
            <rect className='line middle' width='80' height='10' x='10' y='45' rx='5'></rect>
            <rect className='line bottom' width='80' height='10' x='10' y='65' rx='5'></rect>
          </svg>
        </button>
         <button className='button-two' onClick={handleClickButtonTwo}>
          <svg fill='var(--color-button-two)' className='hamburger' viewBox='0 0 100 100' width='250'>
            <rect className='line top1' width='80' height='10' x='10' y='25' rx='5'></rect>
            <rect className='line top2' width='80' height='10' x='10' y='25' rx='5'></rect>
            <rect className='line middle' width='80' height='10' x='10' y='45' rx='5'></rect>
            <rect className='line bottom1' width='80' height='10' x='10' y='65' rx='5'></rect>
            <rect className='line bottom2' width='80' height='10' x='10' y='65' rx='5'></rect>
          </svg>
        </button>
        <button className='button-three' onClick={handleClickButtonThree}>
          <svg stroke='var(--color-button-three)' fill='none' className='hamburger' viewBox='-10 -10 120 120' width='250'>
            <path className='line' strokeWidth='10' strokeLinecap='round' strokeLinejoin='round' d='m 14 70 l 70 0 a 1 1 0 0 0 0 -20 l -70 0 a 1 1 0 0 1 0 -20 l 70 0 a 1 1 0 0 0 -35 -20 l 0 76'></path>
          </svg>
        </button>
      </div>
      <div className='animated-list-div'>
        <div className='animated-list-container-one'>
          <a href='#' style={{'--sibling-index': 1}}><span>01</span>Banana</a>
          <a href='#' style={{'--sibling-index': 2}}><span>02</span>Pear</a>
          <a href='#' style={{'--sibling-index': 3}}><span>03</span>Orange</a>
          <a href='#' style={{'--sibling-index': 4}}><span>04</span>Apple</a>
          <a href='#' style={{'--sibling-index': 5}}><span>05</span>Melon</a>
          <a href='#' style={{'--sibling-index': 6}}><span>06</span>Grape</a>
          <a href='#' style={{'--sibling-index': 7}}><span>07</span>Mango</a>
          <a href='#' style={{'--sibling-index': 8}}><span>08</span>Peach</a>
          <a href='#' style={{'--sibling-index': 9}}><span>09</span>Lemon</a>
          <a href='#' style={{'--sibling-index': 10}}><span>10</span>Clementine</a>
        </div>
        <div className='animated-list-container-two'>
          <a href='#' style={{'--sibling-index': 1}}><span>01</span>Banana</a>
          <a href='#' style={{'--sibling-index': 2}}><span>02</span>Pear</a>
          <a href='#' style={{'--sibling-index': 3}}><span>03</span>Orange</a>
          <a href='#' style={{'--sibling-index': 4}}><span>04</span>Apple</a>
          <a href='#' style={{'--sibling-index': 5}}><span>05</span>Melon</a>
          <a href='#' style={{'--sibling-index': 6}}><span>06</span>Grape</a>
          <a href='#' style={{'--sibling-index': 7}}><span>07</span>Mango</a>
          <a href='#' style={{'--sibling-index': 8}}><span>08</span>Peach</a>
          <a href='#' style={{'--sibling-index': 9}}><span>09</span>Lemon</a>
          <a href='#' style={{'--sibling-index': 10}}><span>10</span>Clementine</a>
        </div>
        <div className='animated-list-container-three'>
          <div><a href='#' style={{'--sibling-index': 1}} className='span1' onMouseEnter={() =>handleMouseEnter('span1')}><span className='inner-span'>01</span>Banana</a></div>
          <span><a href='#' style={{'--sibling-index': 2}} className='span2' onMouseEnter={() =>handleMouseEnter('span2')}><span className='inner-span'>02</span>Pear</a></span>
          <span><a href='#' style={{'--sibling-index': 3}} className='span3' onMouseEnter={() =>handleMouseEnter('span3')}><span className='inner-span'>03</span>Orange</a></span>
          <span><a href='#' style={{'--sibling-index': 4}} className='span4' onMouseEnter={() =>handleMouseEnter('span4')}><span className='inner-span'>04</span>Apple</a></span>
          <span><a href='#' style={{'--sibling-index': 5}} className='span5' onMouseEnter={() =>handleMouseEnter('span5')}><span className='inner-span'>05</span>Melon</a></span>
          <span><a href='#' style={{'--sibling-index': 6}} className='span6' onMouseEnter={() =>handleMouseEnter('span6')}><span className='inner-span'>06</span>Grape</a></span>
          <span><a href='#' style={{'--sibling-index': 7}} className='span7' onMouseEnter={() =>handleMouseEnter('span7')}><span className='inner-span'>07</span>Mango</a></span>
          <span><a href='#' style={{'--sibling-index': 8}} className='span8' onMouseEnter={() =>handleMouseEnter('span8')}><span className='inner-span'>08</span>Peach</a></span>
          <span><a href='#' style={{'--sibling-index': 9}} className='span9' onMouseEnter={() =>handleMouseEnter('span9')}><span className='inner-span'>09</span>Lemon</a></span>
          <span><a href='#' style={{'--sibling-index': 10}} className='span10' onMouseEnter={() =>handleMouseEnter('span10')}><span className='inner-span'>10</span>Clementine</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
