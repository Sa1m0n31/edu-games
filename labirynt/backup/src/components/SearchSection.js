import React, {useState} from 'react';
import searchIcon from '../static/img/search-icon.svg'
import locationIcon from '../static/img/location-icon.svg'

const SearchSection = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = () => {

    }

    return <section className="searchSection center">
        <main className="searchSection__inner flex">
            <label className="searchLabel">
                <img className="searchIcon" src={searchIcon} alt="szukaj" />
                <input className="input input--name"
                       name="name"
                       value={name}
                       onChange={(e) => { setName(e.target.value); }}
                       placeholder="Wpisz nazwę hotelu..." />
            </label>
            <label className="locationLabel">
                <img className="searchIcon" src={locationIcon} alt="szukaj" />
                <input className="input input--location"
                       name="location"
                       value={location}
                       onChange={(e) => { setLocation(e.target.value); }}
                       placeholder="Lokalizacja" />
            </label>
            <button className="searchSubmitBtn" onClick={() => { handleSubmit() }}>
                Szukaj
            </button>
        </main>
    </section>
};

export default SearchSection;
