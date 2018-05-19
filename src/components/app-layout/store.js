import reducer from "./reducer";
import {createStore} from 'redux';
import './styles.css';

export default createStore(reducer, {items: []});

