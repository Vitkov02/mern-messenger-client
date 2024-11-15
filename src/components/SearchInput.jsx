import { BsSearch } from "react-icons/bs";




const SearchInput = () => {
    return (
        <form className="flex items-center gap-2">
            <input className="input input-bordered rounded-full" type="text" placeholder="Search..." />
            <button className="btn btn-circle bg-blue-700 text-gray-900" type="submit">
                <BsSearch />    
            </button>
        </form>
    );
};

export default SearchInput;