import MainStory from "@components/MainStory"
import data from "@components/MainStory/data"
import Navbar from "@components/Navbar"
import NewStories from "@components/NewStories"

function App() {

  return (
    <div className="App my-10 mx-4 xl:mx-auto max-w-7xl">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-5">
        <MainStory {...data} />
        <NewStories />
      </div>
    </div>
  )
}

export default App
