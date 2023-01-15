import '.././index.css';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <>
    <div className="page">
    <Header />
    <Main />
    <Footer />
    <div className="popup popup_type_edit">
      <div className="popup__container">
        <button
          className="popup__button popup__button_close opacity"
          type="button"
        />
        <h3 className="popup__title">Редактировать профиль</h3>
        <form
          className="form form_type_edit"
          id="form__edit"
          name="form__edit"
          method="POST"
          noValidate=""
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                className="form__input form__input_type_name"
                type="text"
                id="editName"
                name="name"
                defaultValue=""
                minLength={2}
                maxLength={40}
                required=""
              />
              <span id="editName-error" className="error" />
            </label>
            <label className="form__field">
              <input
                className="form__input form__input_type_job"
                type="text"
                id="editJob"
                name="job"
                defaultValue=""
                minLength={2}
                maxLength={200}
                required=""
              />
              <span id="editJob-error" className="error" />
            </label>
            <button className="popup__button popup__button_submit" type="submit">
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type_add-card">
      <div className="popup__container">
        <button
          className="popup__button popup__button_close popup__button_close_add opacity"
          type="button"
        />
        <h3 className="popup__title">Новое место</h3>
        <form
          className="form form_type_add-card"
          id="form__add-card"
          name="form__add-card"
          noValidate=""
        >
          <fieldset className="form__set">
            <label className="form__field">
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
            </label>
            <label className="form__field">
              <input
                className="form__input form__input_type_link"
                type="url"
                id="addLinkCard"
                name="url"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span id="addLinkCard-error" className="error" />
            </label>
            <button className="popup__button popup__button_submit" type="submit">
              Создать
            </button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type_full">
      <figure className="popup__full">
        <button
          className="popup__button popup__button_close popup__button_close_full opacity"
          type="button"
        />
        <img className="popup__image" />
        <figcaption className="popup__caption" />
      </figure>
    </div>
    <div className="popup popup_type_del">
      <div className="popup__container">
        <button
          className="popup__button popup__button_close popup__button_close_del opacity"
          type="button"
        />
        <h3 className="popup__title">Вы уверены?</h3>
        <form className="form form_type_delete-card" name="form_delete-card">
          <fieldset className="form__set">
            <button className="popup__button popup__button_submit" type="submit">
              Да
            </button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <button
          className="popup__button popup__button_close popup__button_close_del opacity"
          type="button"
        />
        <h3 className="popup__title">Обновить аватар</h3>
        <form
          className="form form_type_avatar"
          id="form__avatar"
          name="form__avatar"
          noValidate=""
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                className="form__input form__input_type_link"
                type="url"
                id="avatarLink"
                name="avatar"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span id="avatarLink-error" className="error" />
            </label>
            <button className="popup__button popup__button_submit" type="submit">
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </div>
    <template id="template-card" />
    </div></>
    
  );
}

export default App;
