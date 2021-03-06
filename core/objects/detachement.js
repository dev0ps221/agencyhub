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
                    new this.classes.room(this.db,this.detachementid,room,this.classes)
                )
            }
        )
        let roomsready = null
        roomsready = setInterval(
            ()=>{
                let ok = 0
                let ready = []
                this.rooms.forEach(
                    room=>{
                        ready.push(room.ready?1:0)
                    }
                )
                ready.forEach(
                    n=>{
                        ok+=n
                    }
                )
                if(ok==this.rooms.length){
                    this.roomsready = 1
                    this.ready = 1
                    clearInterval(roomsready)
                }
            },2000
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

            }
        )
    }


    getRooms(){
        let rooms = this.rooms
        return {
            firstOne:()=>{
                return rooms.length?rooms[0]:null
            }
            ,lastOne:()=>{
                return  rooms.length?rooms[rooms.length-1]:null
            }
            ,getByName:(name)=>{
                let found = null
                rooms.forEach(
                    room=>{
                        if(room.nom == name) found = room
                    }
                )
                return found
            }
            ,getById:(name)=>{
                let found = null
                rooms.forEach(
                    room=>{
                        if(room.nom == name) found = room
                    }
                )
                return found
            }
            ,all:rooms
        }
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