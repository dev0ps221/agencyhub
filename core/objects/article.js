class BlogArticle{


    assignData(data){
        this.id = data.id
        this.title=data.title
        this.content=data.content
        this.date_post=data.date_post
    }

    constructor(data,db){
        this.db = db
        this.assignData(data)
    }
}