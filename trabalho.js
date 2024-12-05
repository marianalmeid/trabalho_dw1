const mudarTema = document.getElementById("tema");
mudarTema.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});


const tarefaInput = document.getElementById("tarefaInput");
const addTarefa = document.getElementById("addtarefa");
const listaTarefas = document.getElementById("listaTarefas");
const contagem = document.getElementById("contagem");
const barraCont = document.getElementById("barraProgresso");

let tarefasTotal = 0;
let tarefasCompletas = 0;

function progresso() {
    const progress = tarefasTotal > 0 ? (tarefasCompletas/ tarefasTotal) * 100 : 0;
    barraCont.style.width = `${progress}%`;
    contagem.textContent = `${tarefasCompletas} de ${tarefasTotal} tarefas concluídas`;
  }
  

function addTarefa(tarefatext){
    if (!tarefatext) return;

    tarefasTotal++;
    progresso();

    const li = document.createElement("li");
    li.innerHTML = `
    <span>${tarefatext}</span>
    <div class="task-buttons">
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑</button>
      <button class="complete-btn">✔</button>
    </div>`;

    li.querySelector(".complete-btn").addEventListener("click", () => {
        if (!li.classList.contains("completed")) {
          li.classList.add("completed");
          tarefasCompletas++;
        } else {
          li.classList.remove("completed");
          tarefasCompletas--;
        }
        updateProgress();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        if (li.classList.contains("completed")) {
          tarefasCompletas--;
        }
        tarefasTotal--;
        li.remove();
        updateProgress();
      });
    
      li.querySelector(".edit-btn").addEventListener("click", () => {
        const novaTarefa = prompt("Editar tarefa:", li.firstElementChild.textContent);
        if (novaTarefa) {
          li.firstElementChild.textContent = novaTarefa;
        }
      });
    
      listaTarefas.appendChild(li);

}

addTaskButton.addEventListener("click", () => {
    addTarefa(tarefaInput.value.trim());
    tarefaInput.value = "";
  });
  
  tarefaInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTarefa(tarefaInput.value.trim());
      tarefaInput.value = "";
    }
  });