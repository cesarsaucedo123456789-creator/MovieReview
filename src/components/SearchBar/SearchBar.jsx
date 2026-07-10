import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
        <section className="search">
            <div className="container">
                <div className="search__box">
                    <FaSearch className="search__icon"/>

                    <input
                        className="search__input"
                        type="text"
                        placeholder="Buscar películas..."
                    />

                    <button className="button button--primary">
                        Buscar
                    </button>
                </div>
            </div>
        </section>
    )
}