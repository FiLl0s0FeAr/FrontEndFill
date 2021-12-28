function Article (title, body){
    this._title = title;
    this._body = body;
    this._isActive = true;
}

Article.prototype.getTitle = function(){
    return this.title;
}

Article.prototype.getBody = function(){
    return this._body;
}

Article.prototype.isActive = function(){
    return this._isActive;
}


Article.prototype.updateTitle = function(newTitle){
    return this._title = newTitle.slice(0, 32);
}

Article.prototype.updateBody = function(newBody){
    return this._body = newBody.slice(0, 128);
}

Article.prototype.publish = function(){
    return this._isActive = this._isActive === false ? true : console.log('Error. This article is already has status \'public\'');
}

Article.prototype.archive = function(){
    return this._isActive = this._isActive === true ? false : console.log('Error. This article is already has status \'archive\'');
}

function Collection(){
    this.collection = [];
}

Collection.prototype.add = function(newArticle){
    this.collection.push(newArticle);
}

Collection.prototype.remove = function(oldArticle){
    for (let i = 0; i < this.collection.length; i++){
        if (this.collection[i] === oldArticle){
            this.collection.splice(i, 1);
        }

        /*this.collection.filter(function(current){
            return current === oldArticle;
        })

        let index = this.collection.indexOf(oldArticle);
        if(index){
            this.collection.splice(index, 1);
        }*/
    }
}

Collection.prototype.getArchiveCollection = function(){
    return this.collection.filter(function(item){
        return item.isActive();
    })
}

Collection.prototype.getArticleCollection = function(){
    return this.collection.filter(function(item){
        return !item.isActive();
    })
}

/*Collection.prototype.getArticle = function(){
    console.log(this.collection.filter(art => art.isActive === true));
}

Collection.prototype.getArchive = function(){
    console.log(this.collection.filter(art => art.isActive === false));
}*/

let collection = new Collection();
let article1 = new Article('title', 'body');
let article2 = new Article('title', 'body');
let article3 = new Article('title', 'body');
let article4 = new Article('title', 'body');

collection.add(article1);
collection.add(article2);
collection.add(article3);
collection.add(article4);

collection.getArticle()