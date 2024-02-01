import Logo from "../Logo"
import Link from "next/link"

export default function Nav(){
    return(
        <div className="w-full">
             <div className="flex justify-center items-center pt-3 mb-3">
                <Logo />
            </div>
            <div className="flex justify-between max-w-full ml-2 m-auto">
                <div className="navbar-start">
                    <ul className="flex">
                        <li className="mr-4">
                            <Link href="">Furniture</Link>
                        </li>
                        <li className="mr-4">
                            <Link href="">Furniture</Link>
                        </li>
                        <li className="mr-4">
                            <Link href="">Furniture</Link>
                        </li>
                        <li className="mr-4">
                            <Link href="">Furniture</Link>
                        </li>
                        <li className="mr-4">
                            <Link href="">Furniture</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                <div>ddd</div>
                    dd
                </div>

            </div>
            {/* <div className="navbar w-full bg-base-100">
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="">Furniture</Link>
                    </li>
                    <li>
                        <Link href="">Office Organisation</Link>
                    </li>
                    <li>
                        <details>
                        <summary>Lamps & Lighting</summary>
                        <ul className="p-2">
                            <li><a>Hanging Lights</a></li>
                            <li><a>Table Lamps</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Home Decor</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div> */}





        </div>
    )
}