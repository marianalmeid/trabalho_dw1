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
     <div class="task-content">
     <input type="checkbox" class="checkbtn" />
      <span>${tarefatext}</span>
    </div>
    <div class="task-buttons">
      <button class="edit-btn">
        <span class="material-symbols-outlined"> edit </span>
      </button>
      <button class="delete-btn">
        <span class="material-symbols-outlined"> delete </span>
      </button>
    </div>`;

  const checkbox = li.querySelector(".checkbtn");
  const taskText = li.querySelector("span");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      tarefasCompletas++;
      taskText.classList.add("completo");
    } else {
      tarefasCompletas--;
      taskText.classList.remove("completo");
    }
        updateProgresso();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        if (li.classList.contains("completo")) {
          tarefasCompletas--;
        }
        tarefasTotal--;
        tarefasCompletas--;
        li.remove();
        updateProgresso();
      });
    
      li.querySelector(".edit-btn").addEventListener("click", () => {
        const span = li.querySelector("span");
        const novaTarefa = prompt("Editar tarefa:", span.textContent);
        if (novaTarefa) {
          span.textContent = novaTarefa; // Atualiza apenas o texto da tarefa
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