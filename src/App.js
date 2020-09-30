import React, { useState } from 'react';
import axios from 'axios';
import './components/sass/App.sass';

function App() {
  const [id, setId] = useState([]);
  const [name, setName] = useState('general sniper');

  // useEffect(async () => {
  //   const results = await axios.get(`https://league-name-tracker.herokuapp.com/api/summoner/getId/${region}/${name}`)
  //   setId(results.data.id)
  // })
  async function getId() {
    const currRegion = document.getElementById("region-list").value
    const results = await axios.get(`https://league-name-tracker.herokuapp.com/api/summoner/getId/${currRegion}/${name}`)
    setId(results.data.id)
    // console.log(results.data.id)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="summoner name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <select id="region-list">
        <option value="NA1">NA</option>
        <option value="EUW1">EUW</option>
        <option value="KR">KR</option>
        <option value="EUN1">EUNE</option>
        <option value="LA1">LAN</option>
        <option value="LA2">LAS</option>
        <option value="BR1">BR</option>
        <option value="OC1">OCE</option>
        <option value="JP1">JP</option>
        <option value="RU">RU</option>
        <option value="TR1">TR</option>
      </select>
      <button onClick={getId}>Search</button>
    </div>
  );
}


export default App;
