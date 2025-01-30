function addNote() {
    const nameInput = document.getElementById('student-name');
    const subjectInput = document.getElementById('subject');
    const gradeInput = document.getElementById('grade');

    const name = nameInput.value.trim();
    const subject = subjectInput.value.trim();
    const grade = gradeInput.value.trim();

    if (name === '' || subject === '' || grade === '' || isNaN(grade) || grade < 0 || grade > 20) {
      alert('Veuillez entrer des informations valides pour l’élève, la matière et une note entre 0 et 20.');
      return;
    }

    const table = document.getElementById('notes-table');
    const row = document.createElement('div');
    row.classList.add('note');

    const nameCell = document.createElement('div');
    const subjectCell = document.createElement('div');
    const gradeCell = document.createElement('div');

    nameCell.textContent = name;
    subjectCell.textContent = subject;
    gradeCell.textContent = grade;

    row.appendChild(nameCell);
    row.appendChild(subjectCell);
    row.appendChild(gradeCell);

    table.appendChild(row);

    nameInput.value = '';
    subjectInput.value = '';
    gradeInput.value = '';
}

function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}
