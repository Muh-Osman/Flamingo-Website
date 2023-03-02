import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/js/dist/carousel';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux'
import { store } from "./rtk/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router basename={'/'}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);

// PWA
serviceWorkerRegistration.register();