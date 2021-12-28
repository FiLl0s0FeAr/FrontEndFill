class Article{
    #title;
    #body;
    #isActive;

    constructor(title, body){
        this.#title = title;
        this.#body = body;
        this.#isActive = true;
    }

    getTitle(){
        return this.#title;
    }

    updateTitle(){
        this.#title = title.slice(0, 32);
    }

    getBody(){
        return this.#body;
    }

    updateBody(){
        this.#body = body.slice(0, 128);
    }

    isActive(){
        return this.#isActive;
    }

    archive(){
        this.#isActive = false;
    }

    publish(){
        this.#isActive = true;
    }
}

class Collection{
    #items;

    constructor(){
        this.#items = [];
    }

    add(item){
        this.#items.push(item);
    }

    remove(item){
        this.#items = this.#items.filter(function(current){
            return current !== item;
        });
    }

    getArchiveItems(){
        this.#items.filter(function(current){
            return current.isActive();
        })
    }

    getActiveItems(){
        this.#items.filter(function(current){
            return !current.isActive();
        })
    }
}
let col = new Collection();
let article = new Article('title', 'body');
col.add(article);
console.log(col);