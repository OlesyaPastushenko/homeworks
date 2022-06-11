const worker = {
    login: "",
    password: "",
    name: "Vasya",
    surname: "Petrov",
    rate: 25,
    days: 7,
    getSalary: () => {
        return worker.rate*worker.days
    }
}
console.log(worker.getSalary());
cashier(worker) {
    salaryPay: () => {}
}
console.log(worker.getSalary());
admin(cashier) {
    deleteWorker: () => {}
}
consultant(worker) {
    turnover: 200,
    interst: 1,
    getSalary: () => {
        return consultant.turnover*consultant.interst + worker.rate*worker.days
    }
}
console.log(consultant.getSalary())

