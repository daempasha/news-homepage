import links from "@components/links";

const Links = () => {
    return <div className="hidden md:block">
        <ul>
            {links.map((category) =>
                <li className="inline mx-2 text-gray-600">{category}</li>
            )}

        </ul>
    </div>
}

export default Links;