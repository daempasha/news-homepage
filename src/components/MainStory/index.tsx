import Button from "@components/Button";
import { MainStoryProps } from "./types";

const MainStory: React.FC<MainStoryProps> = ({ title, image, description }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="image bg-red-400 md:col-span-2">
            <img src={image} alt={title} />
        </div>
        <div className="title text-5xl font-bold row-span-2">{title}</div>
        <div className="description text-gray-800">{description}</div>
        <div className="button"><Button children="READ MORE" /></div>
    </div>
)

export default MainStory;