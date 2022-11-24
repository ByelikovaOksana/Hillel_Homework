class NotesView{
    el=null;
    #config=null;

    static CLASSES = {
        NOTE_ITEM_CLASS: 'note-item',
        DELETE_BTN_CLASS: 'delete-btn',
        TEXTAREA: 'edit-note',
    };

    static noteTemplate =`
            <div class="field u-full-height">
            </div>`;

    static noteItemTemplate = `
        <div class="note-item " data-note-id="{{id}}">
             <span class="delete-btn">X</span>
            <textarea class="edit-note" name="description">{{description}}</textarea>
        </div>`;

    
    static generateNoteItemHtml(item) {
        return interpolate(NotesView.noteItemTemplate, item)
    }
   
    static getNoteId(el) {
        return el.closest('.' + NotesView.CLASSES.NOTE_ITEM_CLASS).dataset.noteId;
    }  

    constructor(config){   
        this.#config=config;
        this.#initView();
    }
 
     #initView() {
             this.el=htmlToElement(NotesView.noteItemTemplate);

              this.el.addEventListener('click', (e) => {
            if (e.target.classList.contains(
                    NotesView.CLASSES.DELETE_BTN_CLASS
                )
            ) {
                const noteId = NotesView.getNoteId(e.target);
                this.deleteNotes(noteId);
            }
        });  

             this.el.addEventListener('change', (e) => {
            if (e.target.classList.contains(
                    NotesView.CLASSES.TEXTAREA)
            ) {
                const noteId = NotesView.getNoteId(e.target);
                this.changeDescription(id, e.target.value);
            }
        });
    }

    renderList(list){
        this.el.children[0].innerHTML = list.map(NotesView.generateNoteItemHtml)
        .join('');
    }

    deleteNotes(id){
       this.#config.onDelete(id); 
    }
    changeDescription(id, newValue){
        this.#config.onUpdate(id, {description: newValue});
    }
} 






