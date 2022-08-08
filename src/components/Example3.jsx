import React from 'react'

// useState => count 만을 의미하고 있음
// useState => { count: 0 } 형식의 state객체로 사용해 보는것

export default function Example3() {
  const [state, setState] = React.useState({ count: 0 })

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  )

  /*여러 hook을 쓰다보면 setState가 어떤 것에 의존하여 사용하고 있는지가 중요해짐
  이 방식은 setState 안에서 인자로 받은 state를 새로운 state로 변경해서 return 
  하게 되면 setState에서 사용하고 있는 state는 원래 만들어져있던 state로부터
  독립되어 의존적이지 않게 됨
  */
  function click() {
    setState((state) => ({
      count: state.count + 1,
    }))
  }
}
