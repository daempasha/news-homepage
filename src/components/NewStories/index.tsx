import { NewStoriesProps } from "./types";

const NewStories: React.FC<NewStoriesProps> = ({ data }): React.ReactElement => {
    return <div className="flex-grow flex-shrink-0 md:w-96 bg-black p-5">
        <h1 className="text-4xl font-bold text-orange-300 mb-5">New</h1>
        {data.map((row, index) => (
            <>
                <div className="text-white my-5 md:my-10">
                    <a href="#" className="text-xl font-bold cursor-pointer hover:text-orange-500">{row.title}</a>
                    <p className="text-sm my-2 text-gray-400">{row.description}</p>

                </div>
                {(index < data.length - 1) && <div className="border-b-2 border-gray-600" />}
            </>
        ))}
    </div>
}

export default NewStories;