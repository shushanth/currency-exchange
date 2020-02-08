import React from 'react';
import { render } from 'react-dom';

const rootElement = document.getElementById('root');
const App = (): JSX.Element => <div>hello</div>;

render(<App />, rootElement);

export default App;
