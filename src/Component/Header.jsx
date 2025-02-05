
export const Header = () => {
    return (<>

        <div className="mx-auto md:flex justify-between items-center px-18 py-10  w-10/12">

            <div className=" text-black md:w-4/12 ml-14 ">
                <h1 className="text-6xl font-extrabold ">YOUR FEET DESERVE THE BEST</h1>

                <div className="mt-7 ">


                    <p className="  font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias quia sunt omnis atque quosamet consectetur adipisicing!</p>

                    <div className="flex  md:gap-10 gap-4  mt-7 md:mb-5 ">
                        <button className="bg-rose-600 font-bold  text-white  w-24 "> Shop Now </button>
                        <button className="border border-slate-600 font-bold text-gray-500 w-24 sm:w-auto "> Category </button>
                    </div>

                    <div className="mt-7 ">
                        <h3>Also available on </h3>

                        <div className="flex   gap-5  mt-3">
                            <div><img className="w-6" src="./img/f.png" alt="" srcset="" /> </div>
                            <div><img className="w-6" src="./img/a.png" alt="" srcset="" /> </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className=" md:w-1/2 p-1">
                <img className="md:h-80 " src="/img/sho.png" alt="" />
            </div>

        </div>

    </>
    );
};