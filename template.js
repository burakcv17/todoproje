const addInput =document.querySelector("#addInput");
const addNewTask =document.querySelector("#addNewTask");
const alertWarning =document.querySelector(".alert-warning")
const alertSuccess =document.querySelector(".alert-success")
const tasks = document.querySelector("#tasks")
const delall = document.querySelector("#delall")
const all=document.querySelector("#all");
const uncheck=document.querySelector("#uncheckall");
const delchecked=document.querySelector("#delchecked");

//events

addNewTask.addEventListener('click', addTask);
tasks.addEventListener("click", removeEvent);
uncheck.addEventListener("click",uncheckAll);

//editIcon.addEventListener("click",);


// functions

function addTask(e) {
  e.preventDefault();
  
  const isEmpty = str => !str.trim().length;

    if (isEmpty(addInput.value)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 1500);

        //? clear todo input value
        addInput.value = "";
    } else   {
        alertSuccess.style.display = "block";
        setTimeout(() => {
            alertSuccess.style.display = "none";
        }, 1500);
        const li=document.createElement("li");
        li.className="list-group-item";
        tasks.appendChild(li);
        
        const label=document.createElement("label");
        label.className="form-check-label";
        label.innerText=addInput.value;
        label.type="text";
        label.setAttribute("readonly","readonly");
        li.appendChild(label);

        const i=document.createElement("i");
        i.classList="fa-solid fa-trash fa-pull-right";
        i.id="deleteIcon";
        li.appendChild(i);

        const i2=document.createElement("i");
        i2.className="fa-regular fa-pen-to-square fa-pull-right";
        i2.id="editIcon"
        li.appendChild(i2);

        const saveBtn = document.createElement('i');
        saveBtn.className="fa-regular fa-floppy-disk fa-pull-right";
        saveBtn.type = 'button';
        saveBtn.classList.add('hide');
        li.append(saveBtn);
        saveBtn.addEventListener('click', saveEdit);


        const checkBox=document.createElement("input")
        checkBox.className="form-check-input me-1 fa-pull-right"
        checkBox.type="checkbox"
        checkBox.name="chk"
        li.appendChild(checkBox);
        checkBox.id="checkBox";
        addInput.value = "";

        //in function events
        all.addEventListener("click",checkAll);
        all.addEventListener("click", checkedEvent);
        checkBox.addEventListener("change",checkedEvent);
        uncheck.addEventListener("click",uncheckedEvent);
        delall.addEventListener("click",deleteAll);
        delchecked.addEventListener("click",deleteCheckedItem);
        i2.addEventListener("click",editInput);
        
        function uncheckedEvent(){
          if(checkBox.checked == false)
            label.id=("");
        }
        
        function checkedEvent(){
          
          if(checkBox.checked == true && label.className=="form-check-label"){
            label.id=("id","completed");
          } else{
            label.id=("");}
        }

         function deleteCheckedItem(){
          var checkboxes = document.getElementsByName('chk');
          for (var i = checkboxes.length - 1; i >= 0; i--) {
            if (checkboxes[i].checked) {
              var listItem = checkboxes[i].parentNode;
              listItem.parentNode.removeChild(listItem);
            }
          } 
        }
        
        function editInput(e){
          if(e.target.classList.contains("fa-pen-to-square")) {
            const item = this.parentElement;
            const text = item.firstElementChild;
            text.setAttribute('contenteditable', true);
            this.classList.add('hide');
            this.nextElementSibling.classList.remove('hide');
           
          }
        }
        function saveEdit(e) {
          const item = this.parentElement;
          const text = item.firstElementChild;
          text.removeAttribute('contenteditable');
          this.classList.add('hide');
          this.previousElementSibling.classList.remove('hide');
        }
    }
      
}

addInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      addTask(e);
  }
});


function removeEvent(e) {
  if(e.target.classList.contains("fa-trash")) {
    //1.Yol
     e.target.parentElement.remove();
    
     //2.Yol
    //tasks.removeChild(e.target.parentElement);
      //tasks.removeChild(tasks);
  
  }
} 

/*function editTask(e) {
  editIcon.className="fa-solid fa-floppy-disk fa-pull-right";
}*/



function deleteAll() { 
    tasks.innerHTML="";
    
}
  
function checkAll() {
    var ele=document.getElementsByName('chk');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox' ) 
            ele[i].checked=true;
      }
}

function uncheckAll() {
    var ele=document.getElementsByName('chk');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox' ) 
            ele[i].checked=false;
    } 
}



   