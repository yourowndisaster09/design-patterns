abstract class Employee {
    public abstract isNull(): boolean;

    public abstract getName(): string;
}

class Programmer extends Employee {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public isNull(): boolean {
        return false;
    }

    public getName(): string {
        return this.name;
    }
}

class NullEmployee extends Employee {
    public isNull(): boolean {
        return true;
    }

    public getName(): string {
        return 'Not Available';
    }
}

const employees = [
    new Programmer('Simon'),
    new NullEmployee(),
    new Programmer('Art'),
    new NullEmployee(),
    new Programmer('Alanis'),
    new Programmer('Bamboo'),
    new Programmer('Matt'),
    new NullEmployee()
];
employees.forEach((employee) => {
    console.log(employee.isNull());
    console.log(employee.getName());
})