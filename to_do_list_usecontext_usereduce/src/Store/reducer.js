import actions, { newState } from './actions'

const init = { 
    job: '',
    jobs:[]
}

function reducer(state, action) {
    actions[action.type] && actions[action.type](state, action)
    return newState
}

export {init}
export default reducer
