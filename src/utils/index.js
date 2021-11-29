const movieArr = [];

class Movie {
    constructor(title, actor1, actor2, actor3) {
        this.title = title,
        this.actor1 = actor1;
        this.actor2 = actor2;
        this.actor3 = actor3;
    }

    add () {
        movieArr.push(this);
    }
}

module.exports = {Movie, movieArr}