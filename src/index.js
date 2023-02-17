import React, {StrictMode} from 'react';
import { BrowserRouter as Route } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Route>
      <App />
    </Route>
  </StrictMode>
);
