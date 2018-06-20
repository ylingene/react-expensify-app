export default (expenses) => {
    // sum values in expenses array
    return expenses.map((expense) => expense.amount)
            .reduce((total, curr) => (total + curr), 0);
}