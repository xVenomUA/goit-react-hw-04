import css from "./LoadMore.module.css";
export const LoadMore = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className={css.btn}>
        Load More
      </button>
    </>
  );
};
