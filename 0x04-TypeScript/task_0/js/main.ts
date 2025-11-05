interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student= {
    age: 45,
    firstName: "Ken",
    lastName: "kennedy",
    location: "Nairobi"
};

const student2:Student={
    age: 25,
    firstName: "Charity",
    lastName: "M",
    location: "Mombasa"
};


const studentList: Student[] =[student1,student2];

function renderStudentsTable(list: Student[], container: HTMLElement): void {
    // Create table and header
    const table = document.createElement('table');
    table.setAttribute('border', '1'); // simple visible border for demo
    table.style.borderCollapse = 'collapse';
    table.style.minWidth = '200px';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = ['First Name', 'Location'];
    headers.forEach((h) => {
        const th = document.createElement('th');
        th.textContent = h;
        th.style.padding = '6px 10px';
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create body and append a row per student
    const tbody = document.createElement('tbody');

    list.forEach((student: Student) => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        firstNameCell.style.padding = '6px 10px';

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        locationCell.style.padding = '6px 10px';

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}


document.addEventListener('DOMContentLoaded', () => {
    // If your HTML has a container with id="root" we'll use it; otherwise append to body
    const root = document.getElementById('root') ?? document.body;
    renderStudentsTable(studentList, root);
});