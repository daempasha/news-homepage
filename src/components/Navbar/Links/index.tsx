import links from "@components/links";

const Links = () => {
    return <div className="hidden md:block">
        <ul>
            {links.map((category) =>
                <li className="inline mx-2 text-gray-600"><a className="hover:text-orange-600 focus:text-orange-600 transition-colors delay-75" href="#">{category}</a></li>
            )}

        </ul>
    </div>
}

export default Links;