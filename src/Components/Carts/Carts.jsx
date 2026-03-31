
import { use } from "react";

const Carts = ({ datas }) => {

    const datess = use(datas);
    console.log(datess)
    return (
        <div className="mt-6">
            <div className="flex justify-center flex-col items-center ">
                <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
                <p className="mb-4 mt-3" >Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
                
                <div className="tabs tabs-box">
                    <input  type="radio" name="my_tabs_6" className="tab mr-4 text-white btn bg-[#6107ec]" aria-label="Products" defaultChecked />
                    

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Cart()"  />
                    

                    
                </div>
            </div>
        </div>
    );
};

export default Carts;