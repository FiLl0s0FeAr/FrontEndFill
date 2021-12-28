let images = ['https://images.unsplash.com/photo-1633113092754-523fd2d9a90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1638812370576-66949d442e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1638819279779-7590d82281bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'];


class Slider{
    #index;
    #images;

    constructor(images){
        this.#index = 0;
        this.#images = images;
    }

    next(){
        this.#index++;
        this.#index = this.carousel(this.#index);
    }

    prev(){
        this.#index--;
        this.#index = this.carousel(this.#index);
    }

    carousel(index){
        if (index > this.#images.lenght - 1){
            return 0;
        }
        if (index < 0){
            return this.#images.lenght - 1;
        }
        
        return index;
    }

    getCurrentImages(){
        return this.#images[this.#index];
    }
}



let slider = new Slider(images);