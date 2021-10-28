var formButton = document.querySelector('.form-button')
formButton.addEventListener("click" , function(event){
  event.preventDefault()
  console.log('teste')
  var form = document.querySelector('.form-input')
  console.log(form.value)
  if (form.value.length == 0){
    alert('Favor inserir os dados no campo para adicionar o item')
  } else {
    var list = document.querySelector('.list')
    var task = document.createElement('li')
    list.appendChild(task)
    var cont = document.createElement('p')
    list.innerHTML = form.value
    list.appendChild(task)
    list.classList.add('task')

  }

})
