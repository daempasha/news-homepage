import MainStory from "@components/MainStory"
import data from "@components/MainStory/data"
import Navbar from "@components/Navbar"

function App() {

  return (
    <div className="App my-10 mx-10 xl:mx-auto max-w-7xl">
      <Navbar />
      <MainStory {...data} />
    </div>
  )
}

export default App
