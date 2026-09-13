const inputText = document.getElementById("inputText");
const containerBox = document.getElementById("containerBox")
let notes = []
function submitTxt() {
  const text = inputText.value
  notes.push(text)
  update()
  render(text)
  inputText.value = ""
}
function update() {
  localStorage.setItem("txt", JSON.stringify(notes))
}
let result = ""
function getItem() {
  const a = localStorage.getItem("txt")
  if (a !== null) {
    result = JSON.parse(a)
    result.forEach((note, index) => {
      render(note, index)
    })
    notes = result
  }
}
function render(text, id) {
  const div = document.createElement("div");
  const txt = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  
  deleteBtn.textContent = "delete"
  deleteBtn.style.marginLeft = "5px"

  editBtn.textContent = "edit"
  editBtn.style.marginLeft = "5px"
  
  txt.textContent = text
  
  txt.style.marginRight = "15px"
  txt.style.flex = "1"
  txt.style.minWidth = "0"
  txt.style.overflowWrap = "anywhere"

  
  div.style.margin = "5px"
  div.style.padding = "5px"
  div.style.outline = "1px solid black"
  div.style.display = "flex"
  div.style.alignItems = "center"
  
  div.appendChild(txt)
  div.appendChild(deleteBtn)
  div.appendChild(editBtn)
  containerBox.appendChild(div)

  deleteBtn.addEventListener("click", () => {
    const a = deleteBtn.parentElement;
    notes.splice(id, 1)
    a.remove()
    update()
  });
  editBtn.addEventListener("click", () => {
    let a = window.prompt("Change to");
    if (a !== null) {
      txt.textContent = a
      notes[id] = a
      update()
    }
  })
}
getItem()
