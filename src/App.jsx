import { RiMenu3Fill, RiUser3Line,RiAddFill, RiPieChart2Line, RiCloseCircleLine , RiSearchLine , RiDownload2Fill} from "react-icons/ri";
import React,{useState} from "react";
import Sidebar from "./components/shared/Sidebar"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [useOrder , setUseOrder] = useState(false)

  const toogleMenu =() =>{
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className="bg-[#252837] w-full min-h-screen">
       <Sidebar showMenu={showMenu}/>
       {/* Menu movil */}
       <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between">
          
          <button className="p-2">
          <RiUser3Line />
          </button>
          <button className="p-2">
          <RiAddFill />
          </button>
          <button className="p-2">
          <RiPieChart2Line />
          </button>
          <button className="p-2" onClick={toogleMenu}>
          { showMenu ? <RiCloseCircleLine/> : <RiMenu3Fill /> }
          </button>
       </nav>
       <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            {/* Title & search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300"> Jeager Resto</h1>
                <p className="text-gray-500">20 de junio 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-white"/>
                  <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg outline-none text-gray-300"
                  placeholder="Search" />
                </div>

              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="" className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#e87d6c] before:left-0 before:rounded-full before:-bottom-[1px] text-[#e87d6c]">Hot Dishes</a>
              <a href="">Cold Dishes</a>
              <a href="">Soup</a>
              <a href="">Grill</a>

            </nav>
            <div className="flex items-center justify-between ">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiDownload2Fill /> Dine in
              </button>
            </div>

          </header>
       
         
        </div>
        <div className="lg:col-span-2">
          hola
        </div>
       </main>

      </div>
    </>
  )
}

export default App
