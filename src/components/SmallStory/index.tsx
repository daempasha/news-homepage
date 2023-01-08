import { SmallStoryProps } from "./types";

const SmallStory: React.FC<SmallStoryProps> = ({ index, title, description, image }): React.ReactElement => {
    return (
        <div className="grid items-center grid-flow-dense grid-cols-12 gap-5 my-5 mx-2">
            <div className="image col-span-5 md:col-span-5  lg:col-span-3  ">
                <img className="h-32" src={image} alt={title} />
            </div>
            <div className="col-span-7 md:col-span-7 lg:col-span-9">
                <h1 className="text-3xl text-gray-300 font-bold ">{`${(index + 1)}`.padStart(2, "0")}</h1>
                <a className=" font-bold text-lg lg:text-xl my-2 cursor-pointer hover:text-orange-500">{title}</a>
                <p className="text-sm lg:text-base text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default SmallStory;