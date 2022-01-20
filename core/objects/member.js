class Member{



    assignData(data){
        this.id = data.id
        this.nom = data.nom
        this.prenom = data.prenom
        this.telephone = data.telephone
        this.birthday = data.birthday
    }

    setData(){
        
    }

    constructor(data,db){
        this.db = db
        this.assignData(data)
        this.setData()
    }
}
module.exports = Member