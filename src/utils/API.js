class API {
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkError(res){
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    async getUserInfo(){
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._headers
        });
        return this._checkError(res);
    }

    async getCards(){
        const res = await fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers
        });
        return this._checkError(res);
    }

    async editProfile(data){
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.job
            })
        });
        return this._checkError(res);
    }

    async addNewCard(data){
        const res = await fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.url,
            })
        });
        return this._checkError(res);
    }

    async deleteCard(id){
        const res = await fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        });
        return this._checkError(res);
    }

    async addLike(id){
        const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers
        });
        return this._checkError(res);
    }

    async deleteLike(id) {
        const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers
        });
        return this._checkError(res);
    }

    async editAvatar(data){
        const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        });
        return this._checkError(res);
    }
}

const Api = new API({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
    headers: {
      authorization: '5dc5c8be-be79-400a-b4fa-a8894eb1d6c6',
      'Content-type': 'application/json',
    },
  });

  export default Api;