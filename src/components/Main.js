import React, { useState, useEffect } from 'react';

import api from '../utils/api'
import Card from './Card';

export default function Main (props) {
    const {avatarPopup, profilePopup, addPopup} = props;
    const [userName, setUserName] = useState("");
    const [userJob, setUserJob] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getCards()
        ])
        .then(([profileInfo, cards]) =>{
            setUserName(profileInfo.name);
            setUserJob(profileInfo.about);
            setUserAvatar(profileInfo.avatar);
            setCards(cards);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return(
        <div className="content">
        <section className="profile">
          <div onClick={avatarPopup} alt="Аватар пользователя" className="profile__avatar" src={userAvatar}/>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={profilePopup}
              className="profile__button profile__button_edit opacity"
              type="button"
            />
            <p className="profile__job">{userJob}</p>
          </div>
          <button
            onClick={addPopup}
            className="profile__button profile__button_add opacity"
            type="button"
          />
        </section>
        <ul className="cards">{cards.map((card) => (
        <Card
          key = {card._id}
          link = {card.link}
          name={card.name}
          likes={card.likes.length}
          card={card}
          cardClick={props.cardClick}
          />))}
        </ul>
      </div> 
    );
}