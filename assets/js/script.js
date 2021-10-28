var formButton = document.querySelector('.form-button')
formButton.addEventListener("click" , function(event){
  event.preventDefault()
  console.log('teste')
  var form = document.querySelector('.form-input')
  console.log(form.value)
  if (form.value.length == 0){
    alert('Favor inserir os dados no campo para adicionar o item')
  } else {
    var list = document.querySelector('ul.list')
    var task = document.createElement('li')
    task.classList.add('task')
    var content = document.createElement('p')
    content.innerText=form.value
    list.appendChild(content)
    content.classList.add('content','task')
  }
  form.value = ''
})
