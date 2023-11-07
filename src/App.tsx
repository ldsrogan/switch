import { useState } from 'react';
import Switch from './switch';

import './App.scss';

function App() {
  const [on, setOn] = useState(false);

  return (
    <div className="app-container">
      <Switch
        value={on}
        offLabel="Off"
        onLabel="On"
        onChange={(res: boolean) => {
          setOn(res);
        }}
      />
    </div>
  );
}

export default App;
