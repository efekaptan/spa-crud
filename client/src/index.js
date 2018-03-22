import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store';
import Layout from './components/common/Layout';
import ReduxToastr from 'react-redux-toastr'

// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Redux toastr
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
// Import Main styles for this application
import './style.css';

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router>
        <Switch>
          <Route path="/" name="Layout" component={Layout} />
        </Switch>
      </Router>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar />
    </div>
  </Provider>
), document.getElementById('root'));