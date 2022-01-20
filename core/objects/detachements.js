const { throws } = require("assert")

class Detachements{


    registerDeeBeeActions(){
        this.db._____registerAction(
            'getDetachements',(cb)=>{
                let req = this.db.__selectFrom(
                    'detachements',['*'],[[],[]]
                )
                this.db.db.query(
                    req,cb
                )
            }
        )
    }

    setDetachements(detachements){
        detachements.forEach(
            detachement=>{
                this.detachements.push(new this.classes.detachement(this.db,this.classes,detachement))
            }
        )
    }

    getById(id){
        let found = null
        this.detachements.forEach(
            detachement=>{
                if(detachement.id == id){
                    found = detachement
                }
            }
        )
        return found
    }

    getByName(name){
        let found = null
        this.detachements.forEach(
            detachement=>{
                if(detachement.name == name){
                    found = detachement
                }
            }
        )
        return found
    }

    setData(cb){
        this.db.getDetachements(
            (e,detachements)=>{
                if(e)console.log(e)
                else{
                    this.setDetachements(detachements)
                    if(cb)cb()
                }           
            }
        )
    }

    constructor(db,classes){
        this.db = db
        this.classes = classes
        this.detachements = []
        this.registerDeeBeeActions()
        this.setData(()=>{
            this.ready = 1
        })
    }
}


module.exports = Detachements