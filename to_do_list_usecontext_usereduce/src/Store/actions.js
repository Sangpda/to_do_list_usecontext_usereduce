import * as contains from './contains'
let newState
 const actions = {
    [contains.SET_JOB]: (state, action) => {
        newState = {
            ...state,
            job: action.payload
        }
    },
    [contains.ADD_JOB]: (state, action) => {
        newState = {
            ...state,
            jobs: [...state.jobs, action.payload]
        }
    },
    [contains.DELETE_JOB]: (state, action) => {
        newState = {
            ...state,
            jobs: state.jobs.filter((job, id) => id !== action.payload)
        }
    },
}

export { newState }
export default actions