import Logo from '../../assets/images/pokeball.svg'

function Header() {
    return (
        <>
            <div
                className="flex items-center justify-start w-[90%] py-3"
            >
                <img
                    className="mr-4"
                    src={Logo}
                    alt="Pokeball Logo"
                />

                <span
                    className="text-[24px] text-white font-bold"
                >
                    PokeDex
                </span>
            </div>
        </>
    )
}

export default Header;