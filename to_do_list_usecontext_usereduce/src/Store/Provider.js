import { useReducer, useRef } from "react"
import ContextTodo from "./ContextTodo"
import logger from "./logger"
import reducer, { init } from "./reducer"



function Provider( {children} ) {
    const [state, dispatch] = useReducer(logger(reducer), init)
    const inputRef = useRef()

    const value = {
        state,
        dispatch,
        inputRef
    }
    return(
        <ContextTodo.Provider value={value} >
            {children}
        </ContextTodo.Provider>
    )
}

export default Provider
