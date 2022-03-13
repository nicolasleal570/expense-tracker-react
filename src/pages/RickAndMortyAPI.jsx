import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RickAndMortyAPI() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    // axios
    //   .get("https://rickandmortyapi.com/api/character")
    //   .then((response) => {
    //     console.log(response.data);
    //     setCharacters(response.data.results);
    //   })
    //   .catch((error) => {
    //     console.log({ error });
    //   });

    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setCharacters(response.data.results);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h3>
              <Link to={`/rick-and-morty/${character.id}`}>
                {character.name}
              </Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
