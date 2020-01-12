import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import SwapiService from './services/SwapiService';

const users = new SwapiService();
console.log(users.getUsers());

ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
