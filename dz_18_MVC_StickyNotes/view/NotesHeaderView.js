class NotesHeaderView{
  #config = null;
  el = null;

  static template = `
      <div class="row board-head">
          <button>Add Note</button>
      </div>
  `;
  
    constructor(config){
        this.#config=config;
        this.#initView();
    }

    #initView(){
        this.el=htmlToElement(NotesHeaderView.template);
        this.el.querySelector('button').addEventListener('click', () => {
          this.#config.onCreate();
        })
    }
}