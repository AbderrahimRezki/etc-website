const updateBtn = document.getElementById('update')
const eventsTable = document.querySelectorAll('.inner-table')[1]
const lastEventsRow = eventsTable.children[1].lastElementChild
const instructor = lastEventsRow.children[2]
const status = lastEventsRow.lastElementChild

function updateTable(){
    instructor.textContent = "Sohaib Zouambia"
    status.textContent = "Done"
    updateBtn.setAttribute('disabled', true)
}

updateBtn.addEventListener('click', updateTable)