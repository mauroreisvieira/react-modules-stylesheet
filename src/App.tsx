import * as React from 'react';

import classes from './example.module.scss';

const App = (): React.ReactElement => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <p className={classes.headline}>Hello Vite + React!</p>
        <button className={classes.button} onClick={(): void => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </header>
    </div>
  )
}

export default App;
