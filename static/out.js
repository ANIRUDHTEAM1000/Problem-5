document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {      
        deleteRowById(event.target.dataset.id);
        location.href = 'http://localhost:3000/login';
    }
    if (event.target.className === "edit-row-btn") {
        handleEditRow(event.target.dataset.id);
    }
});

const updateBtn = document.querySelector('#update-row-btn');

function deleteRowById(email) {
    fetch('http://localhost:3000/delete/'+email, {
        method: 'DELETE'
    })
    .then(response => response.json())
}

function handleEditRow(id) {
    console.log("to edit "+id);
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#update-name-input').dataset.id = id;
}

updateBtn.onclick = function() {
    
    const updateEmailInput = document.querySelector('#update-email-input');
    const updatePasswordInput = document.querySelector('#update-password-input');
    const updateFirstnameInput = document.querySelector('#update-firstname-input');
    const updateLastnameInput = document.querySelector('#update-lastname-input');
    

    fetch('http://localhost:3000/update', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            email : updateEmailInput.value,
            password: updatePasswordInput.value,
            firstname: updateFirstnameInput.value,
            lastname: updateLastnameInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    })
}