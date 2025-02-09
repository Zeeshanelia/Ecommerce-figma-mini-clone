
export const Nav = () => {
    return (<>
      <nav >
            <div className=" mx-auto w-11/12 flex  md:py-0 py-5 items-center justify-between ">
                 <img src="/img/logo.png"  />
              
                    <ul className="hidden md:flex md:gap-10 text-bold font-medium text-black  ">
                        <li> Manu  </li>
                          <li> Location </li> 
                        <li> About  </li>
                         <li> Contact </li>
                    </ul>
                <h2 className=" text-white text-center h-8 w-20 bg-red-600 p-1">Login</h2>
            </div>
            </nav>
        </>
    );
};
