import { useState, useEffect } from "react"

function useCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Score: ${count}`
    }, [count])

    const addRun = () => setCount(count + 1)
    const boundary = () => setCount(count + 4)
    const sixer = () => setCount(count + 6)
    const reset = () => setCount(0)

    return { count, addRun, boundary, sixer, reset }
}

export default useCounter