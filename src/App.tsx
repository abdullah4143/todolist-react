import ListGroup from "./components/ListGroup.tsx"
import Button from './components/Button.tsx'
import {useState} from 'react'
import Alert from "./components/Alert.tsx";
const App = () => {
  let list = [
    'New York',
    'San Fransico',
    'Los Angeles',
    'Chicago',
    'Houston',
  ];

  let [visibility, setVisibility] = useState(false);
  function HandleClick(){
    visibility ? setVisibility(false) : setVisibility(true);
  }

  return (

    <>
    {visibility && <Alert onAlertClose={HandleClick}  color='danger'>
      <strong>HEY</strong> This is an alert
    </Alert>}
    <Button text='Click me' color='primary' onTap={HandleClick}></Button>
    
    <br />
    <ListGroup items={list} heading='Cities List'/>
    </>
  )
}

export default App