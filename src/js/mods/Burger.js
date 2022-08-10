import jQuery from "jquery";

export default class Burger {

    constructor(){
        this.button = jQuery(".burger");
        this.registerEvents;
    }

    registerEvents(){
        this.button.click(this.toggleAction);
    }

    toggleAction(){
        alert("This button was clicked!");
    }
}