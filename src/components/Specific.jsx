import React, { useState } from 'react';
import axios from 'axios';

const SpecificVerse = () => {
  const [verse, setVerse] = useState(null);
  const [input, setInput] = useState('John 3:12');

  const fetchSpecificVerse = async () => {
    try {
      const { data } = await axios.get(`https://labs.bible.org/api/?passage=${input}&type=json`);
      setVerse(data[0]);
    } catch (error) {
      console.error('Error fetching specific verse:', error);
    }
  };

  return (
    <>
     <div>
      <h2>Get Specific Verse</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter verse (e.g., John 3:12)"
      />
      <button onClick={fetchSpecificVerse}>Get Verse</button>
      {verse && (
        <div>
          <p><strong>{verse.bookname} {verse.chapter}:{verse.verse}</strong></p>
          <p>{verse.text}</p>
        </div>
      )}
    </div>
    </>
   
  );
};

export default SpecificVerse;
