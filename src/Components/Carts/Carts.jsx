
import { use } from "react";
import Cart from "./Cart/Cart";

const Carts = ({ datas }) => {

    const digitalToolSData = use(datas);

    return (
        <div className="mt-6 w-11/12 mx-auto ">
            <div className="flex justify-center flex-col items-center ">
                <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
                <p className="mb-4 mt-3" >Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
                
                <div className="tabs tabs-box mt-10">
                    <input  type="radio" name="my_tabs_6" className="tab text-2xl font-bold
                     mr-4 text-white btn bg-[#6107ec]" aria-label="Products" defaultChecked />
                    

                    <input type="radio" name="my_tabs_6" className="tab text-2xl font-bold" aria-label="Cart()"  />
                    

                    
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
                {
            digitalToolSData.map((data)=><Cart data={data} key={data.id}></Cart>)
            }
            </div>
        </div>
    );
};

export default Carts;