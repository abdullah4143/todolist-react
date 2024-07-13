import ListGroup from "./components/ListGroup.tsx"
const App = () => {
  let list = [
    'New York',
    'San Fransico',
    'Los Angeles',
    'Chicago',
    'Houston',
  ];
  return (

    <>
    <ListGroup items={list} heading='Cities List'/>
    </>
  )
}

export default App