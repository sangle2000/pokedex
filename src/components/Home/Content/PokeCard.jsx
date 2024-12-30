function PokeCard({pokemonInformation}) {

    return (
        <>

            {pokemonInformation.map(pokeInfo => {
                return (
                    <div
                        key={pokeInfo.id}
                        className="size-[180px]"
                    >
                        <div
                            className="size-full flex items-center justify-center flex-col"
                        >
                            <img
                                className="size-[80px]"
                                src={pokeInfo.imgSrc}
                                alt={pokeInfo.name}
                            />

                            <span>
                                {pokeInfo.name}
                            </span>
                        </div>

                    </div>
                )
            })}

        </>
    )
}

export default PokeCard;