class movie{
    constructor(title, studio, rating = 'PG'){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG(movie){

        if(this.rating.startsWith('PG')){
            console.log(this.title)
        }
    }
}
const m1 = new movie('Casino Royale','Eon Productions','PG13')
m1.getPG()

const m2 = new movie('Avatar','PIXAR','')
m2.getPG()