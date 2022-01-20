class DiscussionRoom{

    registerDeeBeeActions(){
        
        this.db._____registerAction(
            'getRoomDiscussions',
            (roomId,cb)=>{
                let req = this.db.__selectFrom(
                    'roomdiscussions',['*'],[['roomid'],[roomId]]
                )
                this.db.db.query(req,cb)
            }
        )
        
        this.db._____registerAction(
            'getRoomDiscussion',
            (id,cb)=>{
                let req = this.db.__selectFrom(
                    'roomdiscussions',['*'],[['id'],[id]]
                )
                this.db.db.query(req,cb)
            }
        )
    
    }

    assignDiscussions(discussions){
        discussions.forEach(
            discussion=>{
                if(discussion.special=='main'){
                    this.generaldiscussion = new this.classes.discussion(this.db,discussion,this.classes)
                }else{
                    this.discussions.push(new this.classes.discussion(this.db,discussion,this.classes))
                }
            }
        )
    }

    getDiscussions(){

    }

    setDiscussions(cb){
        this.db.getRoomDiscussions(
            this.roomId,(e,discussions)=>{
                if(e)console.log(e)
                else{
                    this.assignDiscussions(discussions)
                }
                this.ready = 1
            }
        )
        if(cb)cb()
    }

    assignData(data){
        this.id = data.id
        this.roomId = data.id
        this.nom = data.nom
        this.name = this.nom
        this.setDiscussions(
            ()=>{
            }
        )
    }

    constructor(db,detachmentId,data,classes){
        this.db = db
        this.detachmentId = detachmentId
        this.registerDeeBeeActions()
        this.assignData(data)
        this.classes = classes
        this.generaldiscussion = []
        this.discussions = []
        this.roomname    = ""
    }

}
module.exports = DiscussionRoom