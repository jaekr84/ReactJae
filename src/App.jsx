import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4'>
          <Card
            image="https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-2.png.webp"
            title="APE NFT 1"
            description="APE PROYECT 1 "
            button1Text="+ Info"
            button2Text="Comprar"
          />
          <Card
            image="https://en.ethereumworldnews.com/wp-content/uploads/2022/03/Bored-Ape-NFT-835-Sells-for-a-Shocking-115.png"
            title="APE NFT 2"
            description="APE PROYECT 2 "
            button1Text="+ Info"
            button2Text="Comprar"
          />
          <Card
            image="https://nftcalendar.io/storage/uploads/events/2021/12/QL1sTupzJLvCo461lINhnJrQbdZfEUXAofpZ9iVW.gif"
            title="APE NFT 3"
            description="APE PROYECT 3 "
            button1Text="+ Info"
            button2Text="Comprar"
          />
        </div>
      </div>
    </>
  )
}

export default App
