import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [keyword,setKeyword] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='bg-black'>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-4xl tracking-wide pr-4 font-thin border-r-2 text-white border-white">
          <NavLink to="/">News<span className="font-bold text-red-500">Express</span></NavLink>
        </h1>
        {showMenu ? (
          <div className="flex flex-col items-center space-y-3 bg-white text-black p-4 absolute top-16 left-0 right-0 z-10">
            <div className='justify-center items-center'>
                <input className='text-center border-black border-2 rounded-lg' type={'text'} placeholder={"Search"} name="keyword" value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
            </div>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/top-articles" onClick={toggleMenu}>
              Top Articles
            </NavLink>
            <NavLink to="/favourites" onClick={toggleMenu}>
              Favourites
            </NavLink>
            <NavLink to="/newpost" onClick={toggleMenu}>
              +
            </NavLink>
          </div>
        ) : (
          <div className="hidden sm:flex space-x-4">
          <nav>
            <div className="flex flex-row justify-between sm:flex sm:flex-column">
                <a href="/" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                    <button>Home</button>
                </a>
                <a href="/top-articles" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                    <button>Top Articles</button>
                </a>
                <a href="/favourites" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                    <button>Favourites</button>
                </a>
                <a href="/newpost" className="pr-16 pt-3 text-4xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                    <button>+</button>
                </a>
            </div>
            </nav>
          </div>
        )}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;