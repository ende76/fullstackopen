import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.css';

import Button from './components/Button';
import DisplayAnecdote from './components/DisplayAnecdote';
import DisplayVotes from './components/DisplayVotes';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotesIndex, setMostVotesIndex] = useState(0);

  const handleClickNext = makeClickNextHandler(anecdotes, setSelected);
  const handleClickVote = makeClickVoteHandler(selected, votes, setVotes, mostVotesIndex, setMostVotesIndex);

  return (
    <div>
      <DisplayAnecdote title='Anecdote of the day' anecdote={anecdotes[selected]} />
      <DisplayVotes votes={votes[selected]} />
      <Button title='vote' handleClick={handleClickVote} />
      <Button title='next anecdote' handleClick={handleClickNext} />
      <DisplayAnecdote title='Anecdote with most votes' anecdote={anecdotes[mostVotesIndex]} />
      <DisplayVotes votes={votes[mostVotesIndex]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const makeClickNextHandler = (anecdotes, setSelected) => e => {
  e.preventDefault();

  setSelected(Math.floor(Math.random() * anecdotes.length));
};

const makeClickVoteHandler = (selected, votes, setVotes, mostVotesIndex, setMostVotesIndex) => e => {
  e.preventDefault();

  const selectedVotes = votes[selected] + 1;
  setVotes([...(votes.slice(0, selected)), selectedVotes, ...(votes.slice(selected + 1))]);

  if (selectedVotes > votes[mostVotesIndex]) {
    setMostVotesIndex(selected);
  }
};


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)