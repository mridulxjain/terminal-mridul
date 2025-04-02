function Header() {

    return(
        <div className=" rounded-md border-solid border-1 border-black m-2 h-7 flex items-center justify-between bg-gray-900 p-2">
            <div className="flex gap-2 pl-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="text-gray-500 font-bold font-mono"> 📁 made by mridul -- 80x24 </div>

            <div className="hidden sm:block w-16 md:w-12 lg:w-16"></div>
        </div>
    )
    
}

export default Header;