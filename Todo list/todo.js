let todoList=[{
  item:'Milk',
  duedate: '4/10/2023'
  },
  {item:'Go to college',
  duedate:'2/20/2023'
   }
]
displayItems();
function addTodo(){
    let text=document.querySelector('#text');
    let dateElement=document.querySelector('#todo-date');
    let tododate=dateElement.value;
    let todoItem=text.value;
    todoList.push({item:todoItem,duedate:tododate});
    tododate="";
    text.value="";
  displayItems();
}

function displayItems(tododate){
    let displayelement=document.querySelector('#todoItems');
   
       let newHtml="";
    for(let i=0;i<todoList.length;i++){
      let{item,duedate}=todoList[i];
        newHtml+=`<div><span>${item} ${duedate}</span>
        <button onclick="todoList.splice(${i},1); displayItems(); ">Delete</button>
        </div>`;
   
   displayelement.innerHTML=newHtml;
  ;}
}
