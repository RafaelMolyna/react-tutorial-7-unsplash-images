import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMyGlobalContext } from "./myContext";

// https://unsplash.com/documentation#search-photos
const apiKey = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;
const queryUrl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=1`;

function MyGallery() {
  const { searchTerm } = useMyGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${queryUrl}&query=${searchTerm}`);
      console.log("GETTING data from unsplash...");
      return result.data.results;
    },
  });

  if (isLoading) {
    return <h4>There was an error...</h4>;
  }

  if (isError) {
    return <h4>There was an error...</h4>;
  }

  if (data.length === 0) {
    return <h4>No results found</h4>;
  }

  // console.log("data is:", data);

  return (
    <>
      {data.map(({ id, alt_description, urls: { regular } }) => (
        <img className="img" key={id} src={regular} alt={alt_description} />
      ))}
    </>
  );
}

export default MyGallery;
