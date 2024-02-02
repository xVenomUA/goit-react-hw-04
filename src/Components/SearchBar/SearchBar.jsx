import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
export const SearchBar = ({ handleSubmit }) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.query.value;
    if (!query) {
      toast.error("Enter your request please 🙏");
      return;
    }
    handleSubmit(query.trim().toLowerCase());
    evt.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <div className={css.divForm}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
            name="query"
          />
          <button type="submit" className={css.btn}>
            <IoSearch className={css.icon} />
          </button>
        </div>
      </form>
    </header>
  );
};
