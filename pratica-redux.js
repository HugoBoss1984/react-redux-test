const redux = require('redux')
const createStore = redux.createStore

// *************************** REDUCER ***************************
const initialState = {
    counter: 1
}

// ACTIONS
const incrementa = () => {
    return {
        type: "INCREMENTA"
    }
}
const aumenta = () => {
    return {
        type: "AUMENTA", value: 10
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENTA") {
        return {
            ...state,
            counter: state.counter +1
        }
    }
    if (action.type === "AUMENTA") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    
    return state
}

// *************************** STORE ***************************
const store = createStore(reducer)
console.log(store.getState())

// *************************** SUBSCRIPTION ***************************
store.subscribe(() => {
    console.log("from subscription", store.getState())
})

// *************************** DISPATCH ACTION ***************************
store.dispatch(incrementa())
console.log(store.getState())
