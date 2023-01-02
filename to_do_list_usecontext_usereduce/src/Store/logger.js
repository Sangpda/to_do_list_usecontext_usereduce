
function logger (reducer) {
    return function (privState, action) {
        console.group(action.type)
        console.log("privState", privState)
        console.log("action", action)
        const nextState = reducer(privState, action)
        console.log("nextState", nextState)
        console.groupEnd()
        return nextState
    }
}

export default logger