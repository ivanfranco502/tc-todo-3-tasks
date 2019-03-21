/*
  >> Ver components/myTodos.jsx para el ejercicio
*/

import React from 'react';
import { render } from 'react-dom';

import Layout from './components/layout';
import MyTodos from './components/myTodos';

const App = () => (
  <Layout title="Mis Tareas">
    <MyTodos />
  </Layout>
);

render(<App/>, document.getElementById('root'));
