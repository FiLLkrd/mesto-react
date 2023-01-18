import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';



function App() {
  const [editAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [editProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [addCardPopupOpen, setAddCardPopupOpen] = useState(false);
  const [ImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

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

  return (
    <>
    <div className="page">
    <Header />
    <Main
    profilePopup={handleProfilePopupClick}
    addPopup={handleAddCardPopupClick}
    avatarPopup={handleAvatarPopupClick}
    cardClick={handleCardClick}
     />
    <Footer />
    <PopupWithForm
    name="profile" 
    opened={editProfilePopupOpen}
    title="Редактировать профиль"
    buttonText="Сохранить"
    closed={closePopup}
    >
      <input
        className = "form__input form__input_type_name"
        type = "text"
        id = "editName"
        name = "name"
        defaultValue = ""
        minLength = {2}
        maxLength = {40}
        required = "" />
        <span 
          id = "editName-error"
          className = "error" / >
      <input
        className = "form__input form__input_type_job"
        type = "text"
        id = "editJob"
        name = "job"
        defaultValue = ""
        minLength = {2}
        maxLength = {200}
        required = "" />
          <span 
            id = "editJob-error"
            className = "error" / >
      </PopupWithForm>
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
      <PopupWithForm
       name="avatar" 
       opened={editAvatarPopupOpen}
       title="Обновить аватар"
       buttonText="Сохранить"
       closed={closePopup}
      >
        <input
          className="form__input form__input_type_link"
          type="url"
          id="avatarLink"
          name="avatar"
          placeholder="Ссылка на картинку"
          required=""
          />
            <span id="avatarLink-error" className="error" />
      </PopupWithForm>
    </div>
    </>
  );
}

export default App;
