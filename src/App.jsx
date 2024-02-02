import { useEffect, useState } from "react";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { searchByPage, searchByQuery } from "./API/UnsplashApi";
import { Loader } from "./Components/Loader/Loader";
import { ErrorMessage } from "./Components/ErrorMessage/ErrorMessage";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { ReactAlarm } from "./Components/ReactAlarm/ReactAlarm";
import toast from "react-hot-toast";
import { LoadMore } from "./Components/LoadMore/LoadMore";
import { ImageModal } from "./Components/ImageModal/ImageModal";
// import { ImageModal } from "./Components/ImageModal/ImageModal";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photoData, setPhotoData] = useState([]);
  const [query, setQuery] = useState("");
  const [btn, setBtn] = useState(false);
  const [page, setPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [dataPhotoModal, setDataPhotoModal] = useState([]);

  const handleSubmit = async (query) => {
    try {
      setLoading(true);
      setPhotoData([]);
      setError(false);
      setQuery(query);
      setPage(1);
      const reposnse = await searchByQuery(query);
      setPhotoData(reposnse.data.results);
      if (reposnse.data.total !== 0) {
        toast.success(`Found ${reposnse.data.total} images`);
      } else {
        toast.error("Nothing found for your request");
      }
      if (reposnse.data.total > 30) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 1) {
      const fetchMore = async () => {
        try {
          setLoading(true);
          const reposnse = await searchByPage(query, page);
          setPhotoData((prev) => [...prev, ...reposnse.data.results]);
          if (reposnse.data.total > 30 * page) {
            setBtn(true);
          } else {
            setBtn(false);
          }
        } catch (error) {
          console.log(error);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchMore();
    }
  }, [page, query]);


  const onClick = async () => {
    setPage((prev) => prev + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickModal = (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    setDataPhotoModal(photoData.find((el) => el.id === id));
    openModal();
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {photoData.length > 0 && (
        <ImageGallery photoData={photoData} onClickModal={onClickModal} />
      )}
      {btn && <LoadMore onClick={onClick} />}
      {loading && <Loader />}
      {error && <ErrorMessage message={"Something went wrong"} />}
      <ReactAlarm />
      {isOpen && (
        <ImageModal
          openModal={isOpen}
          closeModal={closeModal}
          data={dataPhotoModal}
        />
      )}
    </>
  );
};
