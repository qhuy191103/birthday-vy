import React, { useState } from 'react';
import ChaseGame from './components/ChaseGame';
import BirthdayBook from './components/BirthdayBook';

function App() {
  const [caught, setCaught] = useState(false);

  return (
    <div>
      {!caught && <ChaseGame onCaught={() => setCaught(true)} />}
      {caught && <BirthdayBook />}
    </div>
  );
}

export default App;
