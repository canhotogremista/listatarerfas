export class ListaTarefa {
  ul: HTMLElement;
  lista: string[] = [];

  constructor(e: HTMLElement) {
    this.lista = ['Tarefa 01', 'Tarefa 02'];
    this.ul = e;
    this.read();
    this.render();
  }

  save() {
    localStorage.setItem('todo-list-ts', JSON.stringify(this.lista));
  }

  read() {
    let salvo = localStorage.getItem('todo-list-ts');
    if (salvo) {
      this.lista = JSON.parse(salvo);
    }
  }

  render() {
    this.ul.innerHTML = '';
    this.lista.forEach((tarefa) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'btn btn-danger btn-sm ms-2';
      li.className = 'mb-2';
      btn.innerText = '-';
      btn.addEventListener('click', () => {
        this.remove(tarefa);
      });
      li.innerText = tarefa;
      li.appendChild(btn);
      this.ul.appendChild(li);
    });
  }

  add(tarefa: string) {
    this.lista.push(tarefa);
    this.save();
    this.render();
  }

  remove(tarefa: string) {
    const i = this.lista.indexOf(tarefa);
    if (i >= 0) {
      this.lista.splice(i, 1);
      this.save();
      this.render();
    }
  }
}
