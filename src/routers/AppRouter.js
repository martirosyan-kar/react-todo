import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import ToDoList from '../components/ToDoList';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <ToDoList/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
