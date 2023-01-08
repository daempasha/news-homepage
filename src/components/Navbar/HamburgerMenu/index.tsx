import MenuCloseIcon from "@assets/icon-menu-close.svg"
import MenuOpenIcon from "@assets/icon-menu.svg"
import links from "@components/links"
import { Menu } from '@headlessui/react'

const HamburgerMenu = () => {
    return (
        <div className="md:hidden" >
            <Menu as="div" >
                <Menu.Button >
                    {({ open }) => open ? (
                        < img className="ml-auto" src={MenuCloseIcon}>
                        </img>
                    ) : <img className="ml-auto" src={MenuOpenIcon} />
                    }
                </Menu.Button>

                <Menu.Items className="absolute right-5 p-1 shadow-lg rounded-lg border-2 border-gray-100">
                    {links.map((link) => <Menu.Item>
                        {({ active }) => (
                            <a href="#" className={`rounded-lg block text-left px-6 py-1 ${active && "bg-orange-600 text-white"}`} >{link}</a>
                        )}
                    </Menu.Item>)}
                </Menu.Items>
            </Menu>
        </div>

    )
}

export default HamburgerMenu;