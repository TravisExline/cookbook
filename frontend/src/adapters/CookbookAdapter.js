class CookbookAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/cookbook"
    }

    getCookbooks() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}