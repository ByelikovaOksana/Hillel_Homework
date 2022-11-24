class NotesCollection{
    #api=null;
    list =[];
    constructor(){
      this.#api=new RestApi('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/')
  }
  
  fetchList(){
    return this.#api.getList().then((data)=>(this.list=data));
  }
   delete(id) {
      return this.#api.delete(id).then(() => {
          this.list = this.list.filter((item) => item.id !== id);
      });
    }

     create() {
      const data={
        description:'',
      };

        return this.#api.create(data).then((newNote) => {
            this.list = [...this.list, newNote];
        });
      }  

      update(id, changes) {
        const item = this.list.find((item) => item.id === id);
        const updatedItem = {
            ...item,
            ...changes,
        };

        return this.#api.update(updatedItem).then(() => {
            this.list = this.list.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            );
        });
    }
} 