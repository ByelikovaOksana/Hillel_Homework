'use strict';
class TodoController{
    #todoListView = null;
    #todoFormView = null;
    #todosCollection = null;
    constructor(container){
        this.#todoListView=new TodoListView ({
            onToggle: (id)=>this.toggle(id),
            onDelete: (id)=>this.delete(id),
        });
        container.append(this.#todoListView.el);

        this.#todoFormView=new TodoFormView ({
            onSave:(data)=>this.create(data)

            
        });
        container.append(this.#todoFormView.el);

        this.#todosCollection= new TodosCollection;
        this.#todosCollection
        .fetchList()
        .then(()=>this.#todoListView.renderList(this.#todosCollection.list));

    }

    toggle (id) {        
        this.#todosCollection
       .toggle(id).then(() =>{
         this.#todoListView.renderList(this.#todosCollection.list)
    });
    }
delete(id){
    this.#todosCollection
    .delete(id)
    .then(()=>
    this.#todoListView.renderList(this.#todosCollection.list)
    );
}

create(data){
    this.#todosCollection
    .create(data)
    .then(()=>
    this.#todoListView.renderList(this.#todosCollection.list)
    );


}

}