import React from "react";

export default function Card(props) {
    const {name, link, likes} = props;

    function handleClick() {
        props.cardClick(props.card);
        console.log(props.card);
    }

    return (
        <article className="card">
            <img 
            alt={name} 
            className="card__image" 
            src={link}
            onClick={handleClick}
            />
            <button type="button" className="card__trash"/>
            <div className="card__signature">
                <h2 className="card__title">{name}</h2>
                <div>
                <button className="card__like" type="button"/>
                <p className="card__number-counter">{likes}</p>
                </div>
            </div>
            
        </article>
    );
}