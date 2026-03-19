import pic from "../img/rohitImg.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import {Link} from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ theme, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Vision" },
        { id: 4, text: "Blog" },
        { id: 5, text: "Contact" },
    ];

    return (
        <div className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-screen-2xl px-4 pt-2">
                <div className="flex h-16 items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/40">
                    <div className="flex items-center gap-3">
                        <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
                        <div className="leading-tight">
                            <h1 className="text-lg font-semibold">
                                Swat<span className="text-green-500">i</span>
                            </h1>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Web Developer</p>
                        </div>
                    </div>

                    {/* Desktop Navbar */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map(({ id, text }) => (
                            <li key={id} className="cursor-pointer">
                                <Link
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                    className="text-sm font-medium text-slate-700 transition-colors hover:text-green-600 dark:text-slate-200 dark:hover:text-green-400"
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            className="hidden sm:inline-flex rounded-xl p-2 text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>

                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden rounded-xl p-2 text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? <IoCloseSharp size={24} /> : <MdOutlineMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {menuOpen && (
                    <ul className="md:hidden mt-2 mb-3 rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/60">
                        <li className="py-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Theme</span>
                            <button
                                type="button"
                                onClick={onToggleTheme}
                                className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>
                        </li>
                        {navItems.map(({ id, text }) => (
                            <li key={id} className="py-2">
                                <Link
                                    onClick={() => setMenuOpen(false)}
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                    className="block text-base font-medium text-slate-800 hover:text-green-600 transition-colors dark:text-slate-100 dark:hover:text-green-400"
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;
