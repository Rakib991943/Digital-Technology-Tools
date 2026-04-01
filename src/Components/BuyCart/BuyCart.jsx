
import { FaRegTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BuyCart = ({buyItem,setBuyItem}) => {
 
    const handleProcedButton=()=>{
        setBuyItem([])
    }

    const handleDeleteButton =(name)=>{
       const filterByDelete = buyItem.filter(item => item.name !== name) ;
         setBuyItem(filterByDelete);
         toast(`${name} is Deleted`)
    }

    const AllCartsPrice = buyItem.reduce((total,item)=> {
        return item.price + total ;
    }, 0)
    console.log(AllCartsPrice)

    return (
        <div>
             <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8">
            {buyItem.length > 0 ? <h2 className='text-3xl font-bold'>Your Carts </h2> : <h1 className="text-3xl font-bold text-center"> Your Carts Is Empty</h1>}
         
        </div>

        {/* Cart Container */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-8">

          {
            buyItem.map((item)=>     <div key={item.id} className="flex items-center justify-between py-6 border-b">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center text-4xl bg-base-200 rounded-2xl">
                  <img src={item.icon} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{item.name}</h3>
                  <p className="text-2xl font-medium mt-1">${item.price}</p>
                </div>
              </div>
              <button
              onClick={()=>handleDeleteButton(item.name)}  
              className="text-red-500 hover:text-red-600 transition-colors">
               <FaRegTrashAlt />
              </button>
            </div>)
          }

            {/* Design Templates Pack */}
       

            {/* Total */}
            <div className="flex justify-between items-center mt-10 pt-8 border-t">
              <span className="text-2xl font-medium">Total</span>
              <span className="text-3xl font-bold">${AllCartsPrice}</span>
            </div>

            {/* Checkout Button */}
            <button 
            onClick={handleProcedButton}
            className="btn btn-primary btn-block mt-10 h-16 text-xl font-semibold">
              Proceed To Checkout
            </button>

          </div>
        </div>

      </div>
    </div>
        </div>
    );
};

export default BuyCart;