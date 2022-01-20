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

        this.db._____registerAction(
            'getDetachement',(id,cb)=>{
                let req = this.db.__selectFrom(
                    'detachements',['*'],[['id'],[id]]
                )
                this.db.db.query(
                    req,cb
                )
            }
        )

        this.db._____registerAction(
            'addDetachement',(nom,cb)=>{
                let req = this.db.__insertINTO(
                    'detachements',['nom'],[nom]
                )
                this.db.db.query(
                    req,cb
                )
            }
        )

        this.db._____registerAction(
            'removeDetachement',(id,cb)=>{
                let req = this.db.__delFrom(
                    'detachements',['id'],[id]
                )
                this.db.db.query(
                    req,cb
                )
            }
        )
    }

    firstOne(){
        return this.detachements.length?this.detachements[0]:null
    }

    lastOne(){
        return  this.detachements.length?this.detachements[this.detachements.length-1]:null
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

    insertDetachement(nom,cb){
        this.db.addDetachement(
            nom,cb
        )
    }

    deleteDetachement(nom,cb){
        this.db.addDetachement(
            nom,cb
        )
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
            let waitready = null
            waitready = setInterval(()=>{
                let detsready = []
                let ok = 0
                this.detachements.forEach(
                    det=>{
                        detsready.push(det.ready?1:0)
                    }
                )
                detsready.forEach(
                    n=>{
                        ok+=n
                    }
                )
                if(ok==this.detachements.length){
                    this.ready = 1
                    clearInterval(waitready)
                }
            },2000)
        })
    }
}


module.exports = Detachements