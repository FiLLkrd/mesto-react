import React, { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';



function App() {
  const [editAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [editProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [addCardPopupOpen, setAddCardPopupOpen] = useState(false);
  const [ImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([
      api.getUserInfo(),
    ])
    .then(([profileInfo]) =>{
      setCurrentUser(profileInfo);
    })
    .catch((err) => {
      console.log(err);
  });
}, []);

  function handleAvatarPopupClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleProfilePopupClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardPopupClick() {
    setAddCardPopupOpen(true);
  }

function closePopup() {
  setEditAvatarPopupOpen(false);
  setEditProfilePopupOpen(false);
  setAddCardPopupOpen(false);
  setImagePopupOpen(false);
}

function handleCardClick(card) {
  setImagePopupOpen(true);
  setSelectedCard({
    name: card.name,
    link: card.link,
  });
}

function handleEditAvatar({ avatar }) {
  api
      .editAvarar(avatar)
      .then((res) => {
          setCurrentUser(res);
          closePopup();
      })
      .catch((err) => {
          console.log(err);
      });
}

  return (
    <>
    <div className="page">
    <CurrentUserContext.Provider value={currentUser}>
    <Header />
    <Main
    profilePopup={handleProfilePopupClick}
    addPopup={handleAddCardPopupClick}
    avatarPopup={handleAvatarPopupClick}
    cardClick={handleCardClick}
     />
    <Footer />
    <EditProfilePopup 
    opened={editProfilePopupOpen}
    closed={closePopup}
    />
      <PopupWithForm
      name="add-card" 
      opened={addCardPopupOpen}
      title="Новое место"
      buttonText="Сохранить"
      closed={closePopup}
      >
        <input
        className="form__input form__input_type_title"
        type="text"
        id="addNameCard"
        name="title"
        placeholder="Название"
        minLength={2}
        maxLength={30}
        required=""
        />
          <span id="addNameCard-error" className="error" />
        <input
          className="form__input form__input_type_link"
          type="url"
          id="addLinkCard"
          name="url"
          placeholder="Ссылка на картинку"
          required=""
          />
            <span id="addLinkCard-error" className="error" />
      </PopupWithForm>
      <ImagePopup
      name="fullscreen-image"
      card={selectedCard}
      closed={closePopup}
      opened={ImagePopupOpen}
      />
      <PopupWithForm
      name="delete-card" 
      title="Вы уверены?"
      buttonText="Да"
      closed={closePopup}
      />
      <EditAvatarPopup
        opened={editAvatarPopupOpen}
        closed={closePopup}
        onUpdateAvatar={handleEditAvatar}
      />
      </CurrentUserContext.Provider>
    </div>
    </>
  );
}

export default App;
