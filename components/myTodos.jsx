/*
  Convertir MyTodos a un Componente con estado:
  * la lista de tareas iniciales debe venir desde la api
  * utilizando la funcion fetchApi de service.js
  * mientras carga la lista debe mostrar un "Cargando ..." en lugar las tareas
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './task';

import {fetchApi} from '../service.js'

class MyTodos extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      loading: true
    };
  }

  componentDidMount(){
    fetchApi().then(data => {
      this.setState({
        tasks: data,
        loading: false
      });
    });
  }

  render(){
    let { tasks, loading } = this.state;
    if(loading)
      return 'Cargando...';
    else
      return (
        <div>
          <input type="text" />
          <button>Add</button>
          <br />
          {tasks && tasks.length ? 
            <ul>
              {tasks.map(({ id, ...task }) => (
                <Task key={id} {...task} />
              ))}
            </ul>
            : 'Sin Tareas'
          }
        </div>
      );
  }
}

MyTodos.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    done: PropTypes.bool
  }))
};

export default MyTodos;