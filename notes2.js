const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function attachListenersToNotes(){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updatestorage();
      }
    });
  }

  function showNotes(){
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes){
      notesContainer.innerHTML = storedNotes;
      attachListenersToNotes();
    }
  }
  showNotes();

function updatestorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img= document.createElement("img");
    img.src="delete.png";
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    notesContainer.appendChild(inputbox).appendChild(img); 
    updatestorage();
    attachListenersToNotes();
})
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function() {
        updatestorage();
      }
    });
    }
})

document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})