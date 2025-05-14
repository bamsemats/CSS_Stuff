import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <div className='svg-container'>
        <button className='button-one' onClick={handleClickButtonOne}>
          <svg fill='var(--color-button)' className='hamburger' viewBox='0 0 100 100' width='250'>
            <rect class='line top' width='80' height='10' x='10' y='25' rx='5'></rect>
            <rect class='line middle' width='80' height='10' x='10' y='45' rx='5'></rect>
            <rect class='line bottom' width='80' height='10' x='10' y='65' rx='5'></rect>
          </svg>
        </button>
         <button className='button-two' onClick={handleClickButtonTwo}>
          <svg fill='var(--color-button)' className='hamburger' viewBox='0 0 100 100' width='250'>
            <rect class='line top1' width='80' height='10' x='10' y='25' rx='5'></rect>
            <rect class='line top2' width='80' height='10' x='10' y='25' rx='5'></rect>
            <rect class='line middle' width='80' height='10' x='10' y='45' rx='5'></rect>
            <rect class='line bottom1' width='80' height='10' x='10' y='65' rx='5'></rect>
            <rect class='line bottom2' width='80' height='10' x='10' y='65' rx='5'></rect>
          </svg>
        </button>
        <button className='button-three' onClick={handleClickButtonThree}>
          <svg stroke='var(--color-button)' fill='none' className='hamburger' viewBox='-10 -10 120 120' width='250'>
            <path className='line' strokeWidth='10' strokeLinecap='round' strokeLinejoin='round' d='m 14 70 l 70 0 a 1 1 0 0 0 0 -20 l -70 0 a 1 1 0 0 1 0 -20 l 70 0 a 1 1 0 0 0 -35 -20 l 0 76'></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
