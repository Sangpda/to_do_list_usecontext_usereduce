import { useContext } from "react"
import ContextTodo from './ContextTodo'

export function useStore() {
    return useContext(ContextTodo) //Shorthand for
    //const [state, dispatch] = useContext(ContextTodo)
    //return [state, dispatch]
} 
