import MainStory from "@components/MainStory"
import mainStoryData from "@components/MainStory/data"
import Navbar from "@components/Navbar"
import NewStories from "@components/NewStories"
import newStoriesData from "@components/NewStories/data"
import SmallStory from "@components/SmallStory"
import smallStoryData from "@components/SmallStory/data"

function App() {

  return (
    <div className="App my-10 mx-4 xl:mx-auto max-w-7xl">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-5">
        <MainStory {...mainStoryData} />
        <NewStories {...newStoriesData} />
      </div>
      <div className="flex flex-col md:flex-row my-10">
        {smallStoryData.map((data, index) => (
          <SmallStory index={index} {...data} />
        ))}
      </div>
    </div>
  )
}

export default App
