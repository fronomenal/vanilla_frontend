import jQuery from "jquery";

export default class Burger {

    constructor(){
        this.button = jQuery(".burger");
        this.menu = jQuery("header nav");
    }

    registerEvents(){
        this.button.click(this.toggleAction.bind(this));
    }

    toggleAction(){
        this.menu.toggleClass("header_nav-btn-toggle");
        this.button.toggleClass("burger-close");
    }
};