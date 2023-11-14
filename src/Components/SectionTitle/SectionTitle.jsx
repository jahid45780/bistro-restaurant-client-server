
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" mx-auto text-center w-4/12 my-7 space-y-3 " >
           <p className=" text-xl text-yellow-600 mt-2" > --- {subHeading} --- </p> 
           <p className=" text-4xl uppercase border-y-4 py-4" > {heading} </p>
        </div>
    );
};

export default SectionTitle;