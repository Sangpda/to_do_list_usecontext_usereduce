import * as contains from './contains'

export function setJob(payload) {
    return {
        type: contains.SET_JOB,
        payload
    }
}
export function addJob(payload) {
    return {
        type: contains.ADD_JOB,
        payload
    }
}
export function deleteJob(payload) {
    return {
        type: contains.DELETE_JOB,
        payload
    }
}