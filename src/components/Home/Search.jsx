function Search() {
    return (
        <>
            <div
                className="relative w-[90%]"
            >
                <input
                    className="w-[100%] px-10 py-2 rounded-[30px] outline-none focus:outline-none"
                    placeholder="Search..."
                />

                <i className="bi bi-search absolute left-0 top-[50%] translate-y-[-50%] px-3 text-[#E02947]"></i>
            </div>
        </>
    )
}

export default Search;