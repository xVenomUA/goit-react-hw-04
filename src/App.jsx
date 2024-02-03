import { useEffect, useState } from "react";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { Loader } from "./Components/Loader/Loader";
import { ErrorMessage } from "./Components/ErrorMessage/ErrorMessage";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { ReactAlarm } from "./Components/ReactAlarm/ReactAlarm";
import { LoadMore } from "./Components/LoadMore/LoadMore";
import { ImageModal } from "./Components/ImageModal/ImageModal";
import { searchImage } from "../src/API/UnsplashApi";
import toast from "react-hot-toast";
export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photoData, setPhotoData] = useState([]);
  const [query, setQuery] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [dataPhotoModal, setDataPhotoModal] = useState([]);

  const handleSubmit = async (query) => {
    setPhotoData([]);
    setQuery(query);
    setPage(1);
  };

  const onClick = async () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!query) return;
    const fetchMore = async () => {
      try {
        setLoading(true);
        setError(false); 
        const response = await searchImage(query, page);
        toast.success(`Found ${response.data.total} images`);
        const { total_pages, results } = response.data;
        setTotalPage(total_pages);
        setPhotoData((prev) => [...prev, ...results]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMore();
  }, [page, query]);

  const showBtn = totalPage > 1 && totalPage !== page;

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onClickModal = (id) => {
    setDataPhotoModal(photoData.find((el) => el.id === id));
    openModal();
  };
  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {photoData.length > 0 && (
        <ImageGallery photoData={photoData} onClickModal={onClickModal} />
      )}
      {showBtn && <LoadMore onClick={onClick} />}
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
