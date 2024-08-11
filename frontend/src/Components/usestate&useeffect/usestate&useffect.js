import{ useState } from "react"
import { Pro } from "./props"

export const UseStateFunction = () => {
    const [count, setCount] = useState(10)

    const Count = () => {
        setCount(count + 1)
    }

    // useEffect(() => {
    //     setCount(count + 1)
    // }, [count])

    return (
        <>
            <h2>My count is : {count}</h2>
            <button onClick={() => Count()}>Update count</button>

            <Pro ast={count} />

        </>
    )
}