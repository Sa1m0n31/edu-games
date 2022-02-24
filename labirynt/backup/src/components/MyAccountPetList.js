import React from 'react';
import SinglePetOnList from "./SinglePetOnList";

const MyAccountPetList = () => {
    return <section className="myAccount__petList">
        <h2 className="smallHeader">
            Lista zwierząt
        </h2>

        <SinglePetOnList type={1} name="Borys" />
        <SinglePetOnList type={2} name="Burek" />

        <a className="formSubmitBtn" href="/dodaj-zwierzaka">
            Dodaj zwierzaka
        </a>
    </section>
};

export default MyAccountPetList;
