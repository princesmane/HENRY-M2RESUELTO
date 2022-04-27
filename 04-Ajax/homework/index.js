//con Jsquery:

$('#boton').click( () => {
    $('#lista').empty(); //empty es una propieda de jsquery que borra la pantalla del elemento seleccionado
    $.ajax({
        url: `http://localhost:5000/amigos`,
        type: 'get',
        success: (info) =>{
            info.forEach((amigo) => $('#lista').append(`<li id=${amigo.id}> ${amigo.name} </li>`)) //Por cada elemento del arreglo, me voy a la lista y le agrego el nombre del amigo
        }
    })
})

$('#search').click(() => {
    $('#amigo').empty();
    let id =$('#input').val()
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'get',
        success: (info) =>{
            $('#amigo').append(`<p> ${info.name} </p>`)
            $('#amigo').append(`<p> ${info.age} </p>`)
            $('#amigo').append(`<p> ${info.email} </p>`)
        }
    })
})

$('#delete').click(() => {
    let id =$('#inputDelete').val()
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'delete',
        success: (info) =>{
            alert('Amigo eliminado exitosamente')
            $('#inputDelete').val('')
            $('#amigo').empty();
        }
    })
})