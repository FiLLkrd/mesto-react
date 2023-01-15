import React, { useState, useEffect } from 'react';
import { promises } from 'tar/lib/read-entry';
import api from '../utils/API';

export default function Main (props) {
    const [userName, setUserName] = useState("");
    const [userJob, setUserJob] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState("[]");

    useEffect(() => {
        promises.all([
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
          <div alt="Аватар пользователя" className="profile__avatar" src={userAvatar}/>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button profile__button_edit opacity"
              type="button"
            />
            <p className="profile__job">{userJob}</p>
          </div>
          <button
            className="profile__button profile__button_add opacity"
            type="button"
          />
        </section>
        <ul className="cards" />
      </div> 
    )
}