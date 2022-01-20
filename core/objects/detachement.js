const Detachements = require("./detachements")

class Detachement{

    registerDeeBeeActions(){
        this.db._____registerAction(
            'getRooms',(detachementid,cb)=>{
                let req = this.db.__selectFrom(
                    'rooms',['*'],[['detachementid'],[detachementid]]
                )
                this.db.db.query(
                    req,cb
                )
            }
        )
    }
    setCotisations(){

    }

    getCotisations(){

    }

    setDiscussions(){

    }

    getDiscussions(){

    }

    setRooms(){
        this.db.getRooms(
            this.detachementid,(e,rooms)=>{
                if(e)console.log(e)
                else{
                    this.assignRooms(rooms)
                }
            }
        )
    }

    assignRooms(rooms){
        rooms.forEach(
            room=>{
                this.rooms.push(
                    new this.classes.room(this.db,this.detachementid,room,{discussions:this.classes.discussions})
                )
            }
        )
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
        this.setRooms(
            ()=>{
                console.log('got rooms')
            }
        )
    }

    constructor(db,classes,data){
        this.db = db
        this.classes = classes
        this.cotisations = []
        this.discussions = []
        this.rooms       = []
        this.generaldiscussion = null
        this.registerDeeBeeActions()
        this.assignData(data)
        this.members = new this.classes.members(this.db,this.id,{member:this.classes.member})
    }


}

module.exports = Detachement