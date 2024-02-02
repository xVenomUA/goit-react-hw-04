import { useState } from "react";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { searchByQuery } from "./API/UnsplashApi";
import { Loader } from "./Components/Loader/Loader";
import { ErrorMessage } from "./Components/ErrorMessage/ErrorMessage";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photoData, setPhotoData] = useState([]);
  const handleSubmit = async (query) => {
    try {
      setLoading(true);
      setPhotoData([]);
      setError(false);
      const reposnse = await searchByQuery(query);
      setPhotoData(reposnse.data.results);
      console.log(reposnse.data.results);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {photoData.length > 0 && <ImageGallery photoData={photoData} />}
      {loading && <Loader />}
      {error && <ErrorMessage message={"Something went wrong"} />}
    </>
  );
};
