import PokeCard from "./Content/PokeCard.jsx";
import {useEffect, useState} from "react";

function Content() {

    const [pokemonDetail, setPokemonDetail] = useState([]);

    const saveAsCSV = (data, filename = 'data.csv') => {
        const csv = data.map(row => Object.values(row).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();

        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        async function fetchPokemonDetails() {
            try {
                const batchSize = 50; // Number of requests per batch
                const totalPokemon = 1025;
                const pokemonDetails = [];

                for (let startId = 1; startId <= totalPokemon; startId += batchSize) {
                    const ids = Array.from(
                        { length: Math.min(batchSize, totalPokemon - startId + 1) },
                        (_, i) => startId + i
                    );

                    const results = await Promise.all(
                        ids.map(async id => {
                            const [pokemon, pokemonSpecies] = await Promise.all([
                                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()),
                                fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.json())
                            ]);
                            return {
                                id,
                                name: pokemon.name,
                                imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                            };
                        })
                    );

                    // Add the batch of results to the array
                    pokemonDetails.push(...results);

                    console.log(`Fetched Pokémon details for IDs ${startId} to ${Math.min(startId + batchSize - 1, totalPokemon)}`);
                }

                setPokemonDetail(pokemonDetails);

                console.log('All Pokémon details saved to data.json successfully.');
            } catch (error) {
                console.error('Error fetching or saving Pokémon details:', error);
            }
        }

        fetchPokemonDetails();

    }, []);

    return (
        <>
            <div
                className="flex-1 bg-white size-full mx-[-4px] scale-[0.98] rounded-[12px] flex justify-around items-center flex-wrap overflow-y-scroll"
            >
                <PokeCard pokemonInformation={pokemonDetail} />
            </div>
        </>
    )
}

export default Content;