import moment from 'moment';

// timestamps (milliseconds) for startDate & endDate
// January 1st 1970 @ midnight (unix epoch)
// ex: 33400, 10, -203

// Get visible expenses
// Destructure filters object (second argument) into indiv variable names
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // latest comes first
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // highest comes first
        }
    });
};

export default getVisibleExpenses;