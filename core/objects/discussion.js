
class Discussion{


    registerDeeBeeActions(){

        this.db._____registerAction(
            'getDiscussionMessages',(discussionid,cb)=>{
                let req = this.__selectFrom(
                    'discussionmessages',['*'],[['discussionid'],[discussionid]]
                )
                this.db.db.query(req,cb)
            }
        )

        this.db._____registerAction(
            'getDiscussionMessage',(id,cb)=>{
                let req = this.__selectFrom(
                    'discussionmessages',['*'],[['id'],[id]]
                )
                this.db.db.query(req,cb)
            }
        )

        this.db._____registerAction(
            'addDiscussionMessage',(data,cb)=>{
                const {content,auteurid,discussionid} = data
                let req = this.__insertINTO(
                    'discussionmessages',['discussionid','content','auteurid'],[discussionid,`'${content}'`,auteurid]
                )
                this.db.db.query(req,cb)
            }
        )

        this.db._____registerAction(
            'editDiscussionMessage',(data,cb)=>{
                const {content,id} = data
                let req = this.__updtWhere(
                    'discussionmessages',['content'],[`'${content}'`],[['id'],[id]]
                )
                this.db.db.query(req,cb)
            }
        )

        this.db._____registerAction(
            'removeDiscussionMessage',(id,cb)=>{
                let req = this.__delFrom(
                    'discussionmessages',['id'],[id]
                )
                this.db.db.query(req,cb)
            }
        )

        
        
    }

    addMessage(data,cb){
        data.discussionid = this.discussionid
        this.db.addDiscussionMessage(
            data,cb
        )
    }

    deleteMessage(id,cb){
        this.db.removeDiscussionMessage(
            id,cb
        )
    }

    editMessage(data,cb){
        this.db.editDiscussionMessage(
            data,cb
        )
    }

    addMedia(data,cb){

    }

    deleteMedia(id,cb){

    }

    assignMessages(messages){
        messages.forEach(
            message=>{
                this.messages.push(message)
            }
        )
    }

    setMessages(){
        this.db.getDiscussionMessages(this.discussionid,(e,messages)=>{
            if(e)console.log(e)
            else{
                this.assignMessages(messages)
            }
        })
    }

    getMessages(){
        return this.messages
    }

    assignData(data){
        this.id = data.id
        this.discussionid = this.id
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