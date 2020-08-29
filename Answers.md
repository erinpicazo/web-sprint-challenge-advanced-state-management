1. What problem does the context API help solve?
Context API solves the problem of prop-drilling for commonly used values by creating a global data store which can be accessed by individual components, obviating the need for the Parent --> child -> grandchild construct of passing props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: actions are objects that specify an action type held in the respective reducer, and also pass a payload value or object to the reducer which applies the updated state to the store. 

reducers: reducers are like buffers that stand between the action creator and the state held in the store. Reducers accept a changed state object payload, and then based on the specified action type, applies the changes to state held in the payload, and then returns a new object as the updated state in the store. 

store: the store is the single source of truth. It is a single object that contains the application state. action creators manipulate state data and pass that changed piece of state along with an action type to the reducer, which applies the change to state in a specified way, and then returns that updated object to the store. The single source of truth object in the store isn't   mutated, but replaced by a cloned and updated state object, which is then accessed by the application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?



1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

1. What is your favorite state management system you've learned and this sprint? Please explain why!
