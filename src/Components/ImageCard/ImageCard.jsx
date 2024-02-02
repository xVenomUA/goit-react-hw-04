import css from "./ImageCard.module.css";

export const ImageCard = ({
  data: {
    alt_description,
    urls: { small },
  },
}) => {
  return (
    <div className={css.card}>
      <img
        src={small}
        alt={alt_description}
        className={css.photo}
      />
    </div>
  );
};
