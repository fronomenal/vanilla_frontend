export default class FixHeader{
    constructor(){
    this.header = document.querySelectorAll("header")[0];
    this.hwp = document.querySelectorAll(".large-hero h1")[0]; 
    this.sections = document.querySelectorAll("[data-anchor]");
    }

    fixedStyling(){
        new IntersectionObserver( sects => {
            const invertSect = !sects[0].isIntersecting;
            this.header.classList.toggle("fixed-style", invertSect);

        }, {threshold: 0.9, rootMargin: "-45px"}).observe(this.hwp);

    }

    anchorTagging(){
        this.ancObs = new IntersectionObserver( sects => {
            sects.forEach( item=> {
            const id = item.target.dataset.anchor;
            document.getElementById(id).classList.toggle("active", item.isIntersecting)
            });
        }, {threshold: 0.5});

        this.sections.forEach( (sect)=> this.ancObs.observe(sect));
    }

    init(){
        this.fixedStyling();
        this.anchorTagging();
    }
}