import * as types from '../constants/ActionTypes'
import axios from 'axios'

// * Needs slash at end for ID, Akash will look at removing
const SERVER = 'http://localhost:5002/todos';

export const getTodos = () => async dispatch => {

  try {
    const res = await axios.get(`${SERVER}`);
    dispatch({
      type: types.GET_TODO,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }

};

export const addTodo = (text) => async dispatch => {
  const DATA = {
    completed: false,
    text: text
  }
  try {
    await axios.post(`${SERVER}`,DATA);
    const res = await axios.get(`${SERVER}`);
    dispatch({
      type: types.GET_TODO,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }

};

export const deleteTodo = (id) => async dispatch => {
  const SER = SERVER+'/'+id;
  try {
    await axios.delete(`${SER}`);
    const res = await axios.get(`${SERVER}`);
    dispatch({
      type: types.GET_TODO,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }

};

export const completeTodo = (id, completedval) => async dispatch => {
  const SER = SERVER+'/'+id;
  const DATA = {
    id: id,
    completed: !completedval,
  }
  try {
    await axios.patch(`${SER}`,DATA);
    const res = await axios.get(`${SERVER}`);
    dispatch({
      type: types.GET_TODO,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }

};

export const editTodo = (id, text) => async dispatch => {
  const SER = SERVER+'/'+id;
  const DATA = {
    id: id,
    text: text
  }
  try {
    await axios.patch(`${SER}`,DATA);
    const res = await axios.get(`${SERVER}`);
    dispatch({
      type: types.GET_TODO,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }

};

//export const addTodo = text => ({ type: types.ADD_TODO, text })
//export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
//export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
//export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
