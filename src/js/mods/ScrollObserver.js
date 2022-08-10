export default class ScrollObserver{
    constructor(elements, rm){
        this.observales = elements;
        this.rmargin = rm + "px";
        
        this.obs = new IntersectionObserver( sects => {
            sects.forEach( item => {
                item.target.classList.toggle("reveal", item.isIntersecting);
                if (item.isIntersecting) this.obs.unobserve(item.target);
            });
        }, {
            threshold: 0.3,
            rootMargin: this.rmargin
        })
    }

    observe(){
        this.observales.forEach( feat => this.obs.observe(feat));
    }
};
