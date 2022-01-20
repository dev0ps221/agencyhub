const Detachements = require("./detachements")

class Detachement{


    setCotisations(){

    }

    getCotisations(){

    }

    setDiscussions(){

    }

    getDiscussions(){

    }

    setRooms(){

    }

    getRooms(){
        
    }

    registerMember(data,cb){
        data.detachementid = this.detachementid
        this.members.register(data,cb)
    }

    loginMember(data,cb){
        this.members.login(data,cb)
    }

    assignData(data){
        this.detachementid = data.id
        this.id = data.id
        this.nom = data.nom
        this.name = data.nom
    }

    constructor(db,classes,data){
        this.db = db
        this.classes = classes
        this.cotisations = []
        this.discussions = []
        this.rooms       = []
        this.generaldiscussion = null
        this.assignData(data)
        this.members = new this.classes.members(this.db,this.id,{member:this.classes.member})
    }


}

module.exports = Detachement