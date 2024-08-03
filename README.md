# Quick Notes for Revision

## Creating the Store

- Creating a `store.js` file
- Importing the `configureStore` function from `@reduxjs/toolkit`
- Importing reducers from respective slice files
- Basic skeleton:
  ```javascript
  import { configureStore } from '@reduxjs/toolkit';
  import sliceReducer from 'path/to/slice';

  const store = configureStore({
    reducer: {
      slice_name: sliceReducer,
      // other slices...
    },
  });

  export default store;
- Now see store.js in src/app/store.js
## Creating Slices
- Creating the slice in its respective folder
- Importing the createSlice function from @reduxjs/toolkit
- Creating initial state (could be done inside the slice as well)
- Basic skeleton:
 ```javascript
        
    import { createSlice } from '@reduxjs/toolkit';
    
    const initialState = {
      // initial state
    };
    
    const slice_name = createSlice({
      name: 'name_of_state', // "name" is necessary
      initialState,
      reducers: {
        // reducer functions
      },
    });
    export default slice_name.reducer;
```
- Now see postSlice.js in src/features/post/postSlice.js

## Creating Reducers

```javascript
//code before
reducers: {
  reducer_name(state, action) {
    // action.payload gives entire info sent
    // state can be changed mutably since immer is used unlike setState hook of React
    // this means state.username = action.payload is also valid
  },
  // reducer name should show the action e.g., reducer_added(state,action) {}
  // state is the current state we're working on
  // action is the info we send to the reducer
}
```
- Whatever reducer function we've made, we need to export it:
```javascript
export const { reducer_name } = slice_name.actions;
Now see postSlice.js in src/features/post/postSlice.js
```
## Using useSelector
- useSelector is used to fetch the store
- Imported from react-redux library
- Example code:
```javascript
import { useSelector } from 'react-redux';

const users = useSelector(state => state.users);
```
## Using Dispatchers
- useDispatch hook is used to dispatch changes to the store
- Imported from react-redux library
- To use this, we need to import the reducer function name
- Example code:
```javascript
import { useDispatch } from 'react-redux';
import { userLoggedIn } from 'path/to/slice';
const dispatch = useDispatch();
dispatch(userLoggedIn(username));
```
- Check src/features/auth/loginPage.jsx

