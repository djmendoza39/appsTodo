

export class Persistencia{

    setItem(key, value){
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;

    }
    getItem(key){
        return JSON.parse(window.localStorage.getItem(key));
    }

    removeItem(key){
        return window.localStorage.removeItem(key);

    }

}