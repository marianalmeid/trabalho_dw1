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

function updateProgresso() {
    const progress = tarefasTotal > 0 ? (tarefasCompletas/ tarefasTotal) * 100 : 0;
    barraCont.style.width = `${progress}%`;
    contagem.textContent = `Tarefas Concluídas: ${tarefasCompletas}/${tarefasTotal}`;
  }
  

function addtrf(tarefatext){
    if (!tarefatext) return;

    tarefasTotal++;
    updateProgresso();

    const li = document.createElement("li");
    li.innerHTML = `
    <span>${tarefatext}</span>
    <div class="task-buttons">
      <button class="edit-btn">...</button>
      <button class="delete-btn">x</button>
      <button class="complete-btn">o</button>
    </div>`;

    li.querySelector(".complete-btn").addEventListener("click", () => {
        if (!li.classList.contains("completo")) {
          li.classList.add("completo");
          tarefasCompletas++;
        } else {
          li.classList.remove("completo");
          tarefasCompletas--;
        }
        updateProgresso();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        if (li.classList.contains("completo")) {
          tarefasCompletas--;
        }
        tarefasTotal--;
        li.remove();
        updateProgresso();
      });
    
    li.querySelector(".edit-btn").addEventListener("click", () => {
      const novaTarefa = prompt("Editar tarefa:", li.firstElementChild.textContent);
      if (novaTarefa) {
        li.firstElementChild.textContent = novaTarefa;
        }
      });
    
      listaTarefas.appendChild(li);

}

addTarefa.addEventListener("click", () => {
    addtrf(tarefaInput.value.trim());
    tarefaInput.value = "";
  });
  
tarefaInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addtrf(tarefaInput.value.trim());
      tarefaInput.value = "";
    }
  });


  const contatos = document.getElementById("contatos");
  const closebtn = document.getElementById("close");
  
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "h") {
      contatos.style.display = "block";
    }
  });
  
  closebtn.addEventListener("click", () => {
    contatos.style.display = "none";
  });