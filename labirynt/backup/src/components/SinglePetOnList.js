import React, {useEffect, useRef, useState} from 'react';
import editIcon from '../static/img/edit.svg'
import trashIcon from '../static/img/trash.svg'
import closeIcon from '../static/img/close.svg'
import dogIcon from '../static/img/dog.svg'
import catIcon from '../static/img/cat.svg'

const SinglePetOnList = ({type, name, id}) => {
    const [petIcon, setPetIcon] = useState(null);

    const modal = useRef(null);

    useEffect(() => {
        switch(type) {
            case 1:
                setPetIcon(catIcon);
                break;
            case 2:
                setPetIcon(dogIcon);
                break;
            default:
                setPetIcon(catIcon);
                break;
        }
    }, [type])

    const openModal = () => {
        modal.current.style.opacity = '1';
        modal.current.style.zIndex = '100';
    }

    const closeModal = () => {
        modal.current.style.opacity = '0';
        modal.current.style.zIndex = '-1';
    }

    const deletePet = () => {
        /* DELETE PET HERE */
        closeModal();
    }

    return <section className="myAccount__petList__item flex">
        <div className="modal modal--deletePet" ref={modal}>
            <div className="modal__inner">
                <button className="icon icon--closeModal" onClick={() => { closeModal(); }}>
                    <img className="btn__img" src={closeIcon} alt="zamknij" />
                </button>

                <p className="modal__text">
                    Czy na pewno chcesz usunąć tego zwierzaka?
                </p>

                <button className="formSubmitBtn" onClick={() => { deletePet(); }}>
                    Usuń zwierzaka
                </button>
            </div>
        </div>

        <img className="myAccount__petList__item__icon" src={petIcon} alt="ikonka" />

        <h3 className="myAccount__petList__item__name">
            {name}
        </h3>
        <button className="icon icon--pet">
            <img className="btn__img" src={editIcon} alt="edytuj" />
        </button>
        <button className="icon icon--pet" onClick={() => { openModal(); }}>
            <img className="btn__img" src={trashIcon} alt="usun" />
        </button>
    </section>
};

export default SinglePetOnList;
