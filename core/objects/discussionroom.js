class DiscussionRoom{

    registerDeeBeeActions(){
        
        this.db._____registerAction(
            getRoomDiscussions,
            (roomId,cb)=>{
                let req = this.db.selecFrom(
                    'roomdiscussions',['*'],[['roomid'],[roomId]]
                )
                this.db.db.query(req,cb)
            }
        )
        
        this.db._____registerAction(
            getRoomDiscussion,
            (id,cb)=>{
                let req = this.db.selecFrom(
                    'roomdiscussions',['*'],[['id'],[id]]
                )
                this.db.db.query(req,cb)
            }
        )
    
    }

    getDiscussions(){

    }

    setDiscussions(){

    }

    constructor(db,classes){
        this.db = db
        this.classes = classes
        this.generaldiscussion = []
        this.discussions = []
        this.roomname    = ""
    }

}