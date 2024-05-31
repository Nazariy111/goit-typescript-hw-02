import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }: SearchBarProps) => {
    const [query, setQuery] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (query.trim() === "") {
            toast("The search field can't be empty", {
                style: {
                    padding: "16px",
                    border: "1px solid #713200",
                    color: "#713200",
                },
                iconTheme: {
                    secondary: "#FFFAEE",
                    primary: "#713200",
                },
            });
            return;
        }
        onSubmit(query);
        setQuery("");
    };

    return (
        <header>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="search"
                    onChange={handleChange}
                    value={query}
                />
                <button type="submit">Search</button>
                <Toaster position="top-center" reverseOrder={false} />
            </form>
        </header>
    );
};

export default SearchBar;