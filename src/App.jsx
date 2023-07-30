import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const API_KEY = process.env.REACT_APP_MY_API_KEY;

function App() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-[#0D182E] text-white">
      <h1 className="text-4xl py-3 font-bold flex justify-center items-center">Random GIF</h1>
      <div className="flex justify-center items-center space-x-10 my-10">
        <Random API_KEY={API_KEY} />
        <Tag API_KEY={API_KEY} />
      </div>
      <p className="flex justify-center items-center bg-[#0D182E] text-white h-16">made with ❤️ by pratyushsingha</p>
    </div>
  );
}

export default App;
