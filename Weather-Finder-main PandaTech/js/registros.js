document.addEventListener("DOMContentLoaded", function(){
    consultarDatosAPI();
});

function consultarDatosAPI(){

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'

    };

    fetch("https://apipanda.azure-api.net/PandaTech/HttpGetFunctionTime", requestOptions)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log('error', error));

        const mostrarData = (data) => {
            console.log(data)
            let body = ''
            for (let i = 0; i<data.length; i++){
                body += `<tr><td>${data[i].IDClima}</td><td>${data[i].Clima}</td><td>${data[i].Pais}</td>
                <td>${data[i].Ciudad}</td><td>${data[i].Nombre}</td><td>${data[i].Cedula}</td>
                <td>${data[i].Registro}</td></tr>`
            }

            document.getElementById('data').innerHTML = body
        }
}