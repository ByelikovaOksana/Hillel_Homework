class  Accordion{
    static CLASSES = {
        ACTIVE: 'accordion-active',
        TITLE: 'accordion-title',
        ITEM: 'accordion-item',
    };

    #el=null;
    constructor(el){
      this.#el=el;
      this.#bindEventListeners();
    }

    #bindEventListeners(){
      this.#el.addEventListener('click',(event)=>{
        if (event.target.classList.contains(Accordion.CLASSES.TITLE )){
          const item=event.target.closest('.'+ Accordion.CLASSES.ITEM);
          this.toggle(item);
        }
      });
    }
    toggle(el){
      el.classList.toggle(Accordion.CLASSES.ACTIVE);
    }

  }
