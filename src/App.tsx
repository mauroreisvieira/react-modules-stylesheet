import * as React from 'react';
import { Button } from './components/button/index';

const App = (): React.ReactElement => {
    const [count, setCount] = React.useState<number>(0);

    return (
        <>
            <Button
                onClick={(): void => setCount((count) => count + 1)}>
                Click me
            </Button>
            <p>count is: { count }</p>
        </>
    );
};

export default App;
