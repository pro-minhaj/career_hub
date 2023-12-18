
const Item = ({job}) => {
    const {logo, category_name, availability} = job;
    return (
        <div className="bg-gradient-to-r from-indigo-100 to-violet-200 rounded-lg p-[40px]">
            <img src={logo} alt="" />
            <h4 className="text-zinc-700 text-xl font-extrabold font-['Manrope'] mt-3">{category_name}</h4>
            <p className="text-neutral-400 text-base font-medium font-['Manrope'] mt-2">{availability}</p>
        </div>
    );
};

export default Item;