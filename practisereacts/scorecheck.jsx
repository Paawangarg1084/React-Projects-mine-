import useCounter from "./customhook"

function ScoreCheck() {
    const { count, addRun, boundary, sixer, reset } = useCounter()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addRun}>Add</button>
            <button onClick={boundary}>Boundary</button>
            <button onClick={sixer}>Sixer</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ScoreCheck