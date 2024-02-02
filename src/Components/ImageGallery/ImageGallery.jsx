import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ photoData, onClickModal }) => {
  return (
    <ul className={css.list}>
      {photoData.map((data) => {
        return (
          <li key={data.id} className={css.card} onClick={onClickModal}>
            <ImageCard data={data} />
          </li>
        );
      })}
    </ul>
  );
};
