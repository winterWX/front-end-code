import React, { useEffect } from 'react'

export const Component = (props) => {
    let count = 0
    useEffect(() => {
        console.log('useEffect === count', count)
    })
    const countChange = () => {
        count = count + 1
        console.log("function == count", count)
    }
    console.log('count== 外协', count)
    return (
        <div>
            <h3>count 的变化</h3>
            <div>
                <div>{count}</div>
                <button onClick={() => { countChange() }}>加一</button>
            </div>
        </div>
    )
}

export default Component