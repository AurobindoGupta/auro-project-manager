import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';


const store = createStore( rootReducer,
      compose(
        applyMiddleware(thunk.withExtraArgument( getFirebase)),
        
    )
  );

  function AuthIsLoaded({children}){ //use for the glitch where the unauthorised page is loaded for a few secs before redirecting
    const auth = useSelector(state => state.firebase.auth)

    if (!isLoaded(auth)) return <div>Loading Screen...</div>;

        return children

  }
ReactDOM.render(

    <Provider store= {store} >
      <ReactReduxFirebaseProvider 
      // used this to bind data to firebase
      firebase={fbConfig}
      config={{ }}
      dispatch= {store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
        <AuthIsLoaded>
        <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
