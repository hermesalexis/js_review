const downloadUsers = quantity => new Promise((resolve, reject) => {

    const api = `https://randomuser.me/api/?results=${quantity}&nat=us`
    //ajax call
    const xhr = new XMLHttpRequest();

    //open conection
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    //optional
    xhr.onerror = (error) => reject(error);
    //send
    xhr.send();
});

downloadUsers(30)
    .then(
        members => printHtml(members),
        error => console.error(
            new Error('Error' + error)
        )
    );

    function printHtml(users){
        let html = '';
        users.forEach(user => {
           html += `
                <li>
                    Nombre: ${user.name.first} ${user.name.last}
                    País: ${user.nat}
                    Imagen:
                        <img src="${user.picture.medium}">
                </li>
           `;
        });

        const appContainer = document.querySelector('#app');
        appContainer.innerHTML = html;
    }
