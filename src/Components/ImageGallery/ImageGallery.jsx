import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ photoData }) => {
  return (
    <ul className={css.list}>
      {photoData.map((data) => {
        return (
          <li key={data.id} className={css.card}>
            <ImageCard data={data} />
          </li>
        );
      })}
    </ul>
  );
};
