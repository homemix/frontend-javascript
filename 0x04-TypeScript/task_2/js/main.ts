interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}


class Director implements DirectorInterface{
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

    workFromHome(): string {
        return "Working from home";
    }
}

class Teacher implements TeacherInterface{
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workFromHome(): string {
        return "Cannot work from home";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function  createEmployee(salary: number | string): Director | Teacher {
    if (salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));

function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


type Subjects = "Math" | "History";
function teachClass(todayClass:Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math"
    }
    else if (todayClass === "History"){
        return "Teaching History"
    }
}

teachClass("Math")

