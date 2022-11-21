class TodoFormView{
    static templateForm=`
    <div class="row">
        <form id="formToDo">
          <div class="ten columns">
            <input
              type="text"
              class="u-full-width"
              name="title"
              id="newTodoTitle"
            />
          </div>
          <div class="two columns">
            <button id="saveBtn">Save</button>
          </div>
        </form>
      </div>`;

    #config=null;
    constructor(config){
        this.#config=config;
        this.#initView();

    }
    #initView(){
        this.el=htmlToElement(TodoFormView.templateForm);
        this.el.addEventListener('submit', (e)=>{
            e.preventDefault();
           
            const obj={
                title: e.target.elements.title.value,
            }
            this.#config.onSave(obj);
            e.target.reset();
        })
    }
}