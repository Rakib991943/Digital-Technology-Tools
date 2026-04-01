
import { use, useState } from "react";
import Cart from "./Cart/Cart";
import BuyCart from "../BuyCart/BuyCart";

const Carts = ({ datas ,buyItem,setBuyItem }) => {

    const [activeTab, setActiveTab] = useState("products")

    const digitalToolSData = use(datas);

    return (
        <div className="mt-6 w-11/12 mx-auto ">
            <div className="flex justify-center flex-col items-center ">
                <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
                <p className="mb-4 mt-3" >Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>

                <div className="tabs tabs-box mt-10">


                    <input
                    onClick={()=>setActiveTab("products")} 
                    type="radio" name="my_tabs_6" className={`tab text-2xl font-bold
                     mr-4  btn  ${activeTab === "products" ? "bg-[#6107ec]" :"" } `} aria-label="Products" defaultChecked />


                    <input 
                     onClick={()=> setActiveTab("cart")}
                    type="radio" name="my_tabs_6" className={ `   tab text-2xl font-bold  ${activeTab === "cart" ? "bg-[#6107ec]" :"" }`} aria-label={`Cart(${buyItem.length})`} />



                </div>
            </div>

            {
             activeTab === "products" && <div className="grid md:grid-cols-3 gap-4 mt-10">
                {
                    digitalToolSData.map((data) => <Cart buyItem={buyItem} setBuyItem={setBuyItem} data={data} key={data.id}></Cart>)
                }
            </div>
            }
           {
           activeTab === "cart" && <BuyCart buyItem={buyItem} setBuyItem={setBuyItem}></BuyCart>
           }

        </div>
    );
};

export default Carts;