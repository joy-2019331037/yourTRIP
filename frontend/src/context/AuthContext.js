import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user:
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
};

/*
In summary, this code sets up an initial state for your application, 
particularly focusing on the user property, which is retrieved from localStorage.
If a valid user object is found in localStorage, it is parsed and assigned to the user property.
If not, user is set to null. This allows your application to remember the user's state even after 
a page refresh or if the user leaves and returns to the application.
*/



export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

/*
export const AuthContext = createContext(initial_state);:
This line creates a React context called AuthContext and initializes
it with the initial_state that you defined earlier. This context can 
be used to share authentication-related state and functions across 
different components of your application.

const AuthReducer = (state, action) => { ... }: This defines a reducer
 function called AuthReducer. A reducer is a pure function that takes 
 the current state and an action and returns a new state based on the 
 action type. In this case, it's used for managing authentication-related state changes.

 Inside the AuthReducer function, you have a switch statement that handles different types
  of actions that can be dispatched to the reducer. Here's what each case does:


"LOGIN_START": This action indicates the start of a login operation.
 It sets the user to null, sets loading to true, and clears any previous error.

"LOGIN_SUCCESS": This action indicates a successful login.
 It sets the user to the action.payload (which typically contains user information), sets loading to false, and clears any previous error.
 
 "LOGIN_FAILURE": This action indicates a failed login. It sets the user to null, sets loading to false,
  and stores the error message in the error field.

"REGISTER_SUCCESS": This action seems to indicate a successful user registration. It sets the user to null, 
sets loading to false, and clears any previous error.

"LOGOUT": This action indicates a user logout. It sets the user to null, sets loading to false, and clears any previous error.

default: If the action type is not recognized, it returns the current state without any changes



This reducer can be used in conjunction with the useReducer hook in your React components to manage 
authentication state changes. When you dispatch actions with specific types (e.g., "LOGIN_START", "LOGIN_SUCCESS", "LOGOUT"), 
the reducer will update the state accordingly, and components that are consuming the AuthContext will be re-rendered with 
the updated state.
*/



export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



/*
export const AuthContextProvider = ({ children }) => { ... }: This is a functional component called AuthContextProvider. 
It receives a single prop, children, which represents the child components that will be wrapped by this provider.

const [state, dispatch] = useReducer(AuthReducer, initial_state);: This line initializes the state and the dispatch
 function using the useReducer hook. The AuthReducer function you defined earlier is used to manage the state transitions, 
 and the initial_state is the initial state for your application's authentication context.

useEffect(() => { ... }, [state.user]);: This effect is triggered whenever the state.user property changes.
 It saves the user data to the browser's localStorage as a JSON string. This way, the user's authentication
  state is persisted in the browser, and it can survive page reloads.

  <AuthContext.Provider ...>{children}</AuthContext.Provider>: This is where you provide the authentication-related state 
  and context to the child components. The value prop of the AuthContext.Provider component is an object that includes user,
   loading, error, and dispatch properties. This object is used as the value of the context, making these values available to
    any components wrapped by this provider.

user: The user's authentication information.
loading: A boolean flag indicating whether there is an ongoing loading operation.
error: Any error messages related to authentication.
dispatch: The function to dispatch actions to change the authentication state, provided by the useReducer hook.




By wrapping your application with AuthContextProvider, you make the AuthContext and its associated state and functions 
accessible to all child components. These child components can consume this context using the useContext hook or 
access the context properties via props.

*/