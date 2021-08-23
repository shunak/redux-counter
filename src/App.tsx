import { useDispatch,  useSelector } from "react-redux";
import { RootState } from "./store";

// Component for Counter Application
const App = () => {
  // Call hook to Dispatch from ract-redux
  const dispatch = useDispatch();
  // Abstruct state by useSelector() from react-redux
  const count = useSelector((state: RootState) => state.count);
  // Event to call Dispatch function when push button
  const handleAddCount = () => {
    // Pass Action to Dispatch function, usually, Action is defined by object type value which has "type" as a key value. 
    dispatch({type: "add_count"});
  };
  return (
    <div>
      <button onClick={handleAddCount}>+1</button>
      <p>{count}</p>
    </div>
  )
}

// // Set initial state
// const initialState = { count: 0 };
// // Create Reducer function, counter for Action
// const counter = (state = initialState, action: any) => {
//  switch(action.type) {
//     // In case "add_count" Action is published, update state and return it.
//     case "add_count":
//       const newCount = state.count + 1;
//       return {
//         count: newCount        
//      }; 
//      default:
//        return state;
//   }
// };

// // Pass the Reducer(counter) to createStore() function
// const store = createStore(counter);
// // Redux is valid by Folding App component by Provider.
// // Pass the store value created by createStore() function.
// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById("root"),
// );


export default App;