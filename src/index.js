import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';
import 'bootstrap/js/dist/carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router basename={'/'}>
        <App />
    </Router>
);

serviceWorkerRegistration.register();