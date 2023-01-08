import links from "@components/links";

const Links = () => {
    return <div className="hidden md:block">
        <ul data-testid="links">
            {links.map((category) =>
                <li className="inline mx-5 text-gray-800"><a className="hover:text-orange-600 " href="#">{category}</a></li>
            )}

        </ul>
    </div>
}

export default Links;