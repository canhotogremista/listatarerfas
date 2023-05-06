// Import stylesheets
import './style.css';
import { ListaTarefa } from './tarefa';

const lista = document.getElementById('ul-tarefa');
const input = document.getElementById('input-tarefa');
const botao = document.getElementById('botao-adicionar');

let minhaTarefa = new ListaTarefa(lista);
botao.addEventListener('click', () => {
  let tarefinha = (<HTMLInputElement>input).value;
  (<HTMLInputElement>input).value = '';
  minhaTarefa.add(tarefinha);
});
