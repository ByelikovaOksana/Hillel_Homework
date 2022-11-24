'use strict';
class NotesController{
    #notesView= null;
    #notesHeaderView = null;
    #notesCollection = null;

    constructor(container){
        this.#notesHeaderView=new NotesHeaderView({ 
        onCreate: this.create,
        });
        container.append(this.#notesHeaderView.el);


        this.#notesView=new NotesView({ 
            onDelete: (id) => this.delete(id),
            onUpdate: (id)=> this.update(id),
        })
        container.append(this.#notesView.el);

        this.#notesCollection=new NotesCollection();

        this.#notesCollection
        .fetchList()
        .then(()=>this.#notesView.renderList(this.#notesCollection.list))
    }

        delete(id){
        this.#notesCollection.delete(id).then(() => {
            this.#notesView.renderList(this.#notesCollection.list);
        });

        update = (id, changes) => {
            this.#notesCollection.update(id, changes).then(() => {
                this.#notesView.renderList(this.#notesCollection.list);
            });
        };


        create=()=>{
        this.#notesCollection
       .create()
       .then(()=>{
       this.#notesView.renderList(this.#notesCollection.list)
       });
 }
}
}