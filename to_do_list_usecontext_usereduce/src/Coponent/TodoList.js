import * as functions from '../Store/dispatchFuncitons'
import { useStore } from '../Store'


function TodoList() {
    const value = useStore()
    const { state, dispatch, inputRef } = value

    function handleSubmit() {
        if(inputRef.current.value){
            dispatch(functions.addJob(state.job))
            inputRef.current.focus()
            dispatch(functions.setJob(''))
        } else {
            inputRef.current.focus()
            dispatch(functions.setJob(''))
        }
    }
    function handleOnKeyup(e) {
            if (e.target.value &&e.key === 'Enter') {
                handleSubmit()
            }
        }

    return (
        <div className="TodoList">
            <input 
                className="input"
                ref={inputRef}
                style={{margin: 50, marginBottom: 10, minWidth: 400, height: 36, padding: 8}}
                value={state.job}
                placeholder='What you want to do?'
                onChange={e => {
                    dispatch(functions.setJob(e.target.value))
                }}
                onKeyUp={handleOnKeyup}
            />
            <button
                onClick={handleSubmit}
                style={{minWidth: 80, height: 36}}
            >
                Add
            </button>
            <ul>
                {state.jobs.map((job, i) => 
                    <li style={{ marginLeft: 50, marginTop: 20, listStyleType: 'none'}} key={i}> 
                    <span style={{marginRight: 10}} onClick={()=>dispatch(functions.deleteJob(i))}>&times;</span>
                    {job}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoList