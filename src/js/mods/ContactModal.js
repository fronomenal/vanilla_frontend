import jQuery from "jquery";

export default class ContactModal{

    constructor(){
        this.contacts = jQuery(".cnt-modal-tg");
        this.modal = jQuery(".contact-modal");
        this.close = jQuery(".modal-close");
        this.dom = jQuery(document);
    }

    registerEvents(){
        this.contacts.click(this.toggleModal.bind(this));
        this.close.click(this.toggleModal.bind(this));
        this.dom.keyup(this.keyPressed.bind(this));

    }

    toggleModal(){
        this.modal.toggle();
        return false;
    }

    keyPressed(e){
        if (e.keyCode == 27) this.toggleModal();
    }

}