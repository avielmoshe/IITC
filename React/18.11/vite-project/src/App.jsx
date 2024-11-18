import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./componetns/Button.jsx";
import Card from "./componetns/Card.jsx";
import Modal from "./componetns/Modal.jsx";
import Layout from "./componetns/Layout.jsx";
import ButtonIcon from "./componetns/ButtonIcon.jsx";
import Icon from "./componetns/Icon.jsx";
import List from "./componetns/List.jsx";
import Pokeball from "./componetns/Pokeball.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
      <Pokeball/>
     {/* <Button 
      setCount={setCount}
      >
        <span>count is {count}</span> 
    </Button>
    <Card> 
      <h2>Title</h2>
      <p>This is some content inside the card.</p>
     </Card>
     <Modal isOpen={true}>
  <h2>Modal Title</h2>
  <p>This is the modal content.</p>
     </Modal>
     <Layout>
     <h1>Page Title</h1>
     <p>This is the main content of the page.</p>
     </Layout>
     <ButtonIcon>
  <Icon />
  Click Me
</ButtonIcon>
<ul>
<List>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</List>
</ul> */}
        
      </div>
    </>
  )
}

export default App
