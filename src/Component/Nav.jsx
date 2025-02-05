
export const Nav = () => {
    return (<>
      <nav >
            <div className="overflow-hidden mx-auto w-11/12 flex   items-center justify-between ">
                 <img src="/img/logo.png"  />
              
                    <ul className="overflow-hidden flex md:gap-10 text-bold font-medium text-black  ">
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
