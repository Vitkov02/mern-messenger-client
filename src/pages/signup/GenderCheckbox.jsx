const GenderCheckbox = () => {
    return (
        <div className="flex pt-2">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className={`label-text`}>Female</span>
                    <input className="checkbox focus-visible:outline-gray-950 border-gray-300 hover:border-blue-700" type="checkbox" />
                </label>
                </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className={`label-text`}>Female</span>
                    <input className="checkbox focus-visible:outline-gray-950 border-gray-300 hover:border-blue-700" type="checkbox" />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;