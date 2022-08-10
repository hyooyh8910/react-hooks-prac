import React from 'react'

export default function Example5() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    console.log('componentDidMount')

    return () => {
      //cleanUp
      //componentWillUmount
    }
  }, [])

  React.useEffect(() => {
    console.log('componentDidMount & componentDidUpdateByCount', count)

    return () => {
      //cleanUp
      console.log('cleanUp by count', count)
    }
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  )

  function click() {
    setCount(count + 1)
  }
}
