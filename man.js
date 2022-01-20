const path = require('path')


class Paths{
    
    
    setPath(name,pth){
        this.paths[name] = pth
    }
    
    getPath(name){
        return this.paths.hasOwnProperty(name) ? this.paths[name] : null
    }
    
    constructor(){
        this.paths = []
        this.modulepath = path.join(__dirname)
    }
    
}

class Manager{
    
    
    
    constructor(){

        this.paths = new Paths()
        
        this.newPath(
            'corepath',path.join(this.paths.modulepath,'core')
        )
        
        const DeeBee = require(path.join(this.paths.getPath('corepath'),'mods','deebee')) 
        
        this.classes = {
            blog:require(path.join(this.paths.getPath('corepath'),'objects','blog')),
            article:require(path.join(this.paths.getPath('corepath'),'objects','article')),
            agence:require(path.join(this.paths.getPath('corepath'),'objects','agence')),
            cotisation:require(path.join(this.paths.getPath('corepath'),'objects','cotisation')),
            room:require(path.join(this.paths.getPath('corepath'),'objects','discussionroom')),
            detachement:require(path.join(this.paths.getPath('corepath'),'objects','detachement')),
            detachements:require(path.join(this.paths.getPath('corepath'),'objects','detachements')),
            discussion:require(path.join(this.paths.getPath('corepath'),'objects','discussion')),
            member:require(path.join(this.paths.getPath('corepath'),'objects','member')),
            members:require(path.join(this.paths.getPath('corepath'),'objects','members'))
        }

        this.data  = new DeeBee({user:'root',password:'',host:'127.0.0.1',database:'asss'})
    
    }

    newPath(name,pth){
    
        this.paths.setPath(name,pth)
    
    }


    getPath(pathname){
    
        return this.paths.getPath(pathname)
    
    }

}



module.exports = new Manager()