import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function RickAndMortyAPISingleCharacter() {
  const [character, setCharacter] = useState(null);
  const { characterId } = useParams();

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );

      setCharacter(response.data);
      console.log({ response: response.data });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div>
      <h1>Personaje: {characterId}</h1>
      <p>{JSON.stringify({ character }, null, 3)}</p>
    </div>
  );
}
