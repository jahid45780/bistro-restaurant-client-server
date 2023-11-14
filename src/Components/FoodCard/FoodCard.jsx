const FoodCard = ({item}) => {
    const { image, price, name, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
   <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white" > $ {price} </p>
  <div className="card-body flex flex-col items-center h-64 space-y-4 ">
    <h2 className="card-title"> {name} </h2>
    <p> {recipe} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-0  border-b-4 bg-slate-100 border-orange-600 "> Add To cart </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;