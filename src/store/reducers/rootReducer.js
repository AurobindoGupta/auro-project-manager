import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore'; //sync our data in background from firestore to state

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
});

export default rootReducer;