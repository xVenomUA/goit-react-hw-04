import css from "./ImageCard.module.css";

export const ImageCard = ({
  data: {
    id,
    alt_description,
    urls: { small },
  },
}) => {
  return (
    <>
      <div className={css.card}>
        <img src={small} alt={alt_description} className={css.photo} data-id={id} />
      </div>
    </>
  );
};
