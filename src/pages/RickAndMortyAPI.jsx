import { useEffect, useState } from "react";
import axios from "axios";

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
        "https://rickandmortyapi.com/api/characterrr"
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
          <li>
            <h3>{character.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
