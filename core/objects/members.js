class Members{



    registerDeebeeActions(){
        


        this.db._____registerAction(
            'getDetachementMembers',(detachementid,cb)=>{
                let req = this.db.__selectFrom([this.db._getUsersTable()],['*'],[['detachementid'],[detachementid]])
                this.db.db.query(
                    req,cb
                )
            }
        )
        
        this.db._____registerAction(
            'registerMember',(data,cb)=>{
                const {nom,prenom,birthday,telephone,adresse,password,photo,profession,role,detachementid,email} = data
                let fields = ['nom','prenom','birthday','telephone','adresse','password','photo','profession','role','detachementid','email']
                let values = [`'${nom}'`,`'${prenom}'`,birthday?`'${birthday}'`:null,`'${telephone}'`,`'${adresse}'`,`password('${password}')`,`'${photo}'`,`'${profession}'`,`'${role}'`,`${detachementid}`,`'${email}'`]
                let req = this.db._insertReq(this.db._getUsersTable(),fields,values)
                this.db.db.query(
                    req,cb
                )
            }
        )
        
        this.db._setUsersLogField('telephone')
        

    }

    setMembers(members){
        members.forEach(
            member=>{
                this.members.push(new this.classes.member(member,this.db))
            }
        )
    }

    login(data,cb){
        this.db.___login(data.login,data.password,cb)
    }

    register(data,cb){
        this.db.registerMember(data,(e,r)=>{
            if(e)console.log(e)
            else{
                console.log(r)
                this.setData(
                    ()=>{
                        console.log('added members and set data')
                    }
                )
            }
            if(cb)cb(e,r)
        })
    }

    setData(cb){
        this.db.getDetachementMembers(
            this.detachementid,
            (e,members)=>{
                if(e)console.log(e)
                else{
                    this.setMembers(members)
                }
                if(cb)cb()
            }
        )
    }

    constructor(db,detachementid,classes){
        this.db = db
        this.detachementid = detachementid
        this.db._setUsersTable('members')
        this.classes = classes
        this.members = []
        this.registerDeebeeActions()
        this.setData()
    }
}

module.exports = Members