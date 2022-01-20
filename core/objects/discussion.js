
class Discussion{


    addMessage(data,cb){

    }

    deleteMessage(id,cb){

    }

    editMessage(data,cb){

    }

    addMedia(data,cb){

    }

    deleteMedia(id,cb){

    }

    setMessages(){

    }

    getMessages(){

    }

    assignData(data){
        this.id = data.id
        this.nom = data.name
        this.name = data.name
        this.roomid = data.roomid
        this.roomId = this.roomid
    }

    constructor(db,data,classes){
        this.db = db
        this.classes = classes
        this.assignData(data)
        this.members = []
        this.messages= []
    }
}
module.exports = Discussion