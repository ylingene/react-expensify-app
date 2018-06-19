import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

// learned how to:
// read component state w/ wrapper.state
// .simulate() things w/ 'change', etc and pass in input values
// index into array of components when .find() returns more than 1
// mocking w/ spies to check if correct arguments was passed in
// .prop([key]) to find particular prop to call onChange functions (make sure state values set correctly)

test('render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot(); // snapshot 1
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    }); // pass in e for onSubmit function
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot(); // snapshot 2
});

test('set description on input change', () => {
    // simulate typing in the description input field
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('set textarea (note) change', () => {
    // simulate typing in the textarea input field
    const value = 'New textarea';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('set amount if valid input', () => {
    // simulate typing in the amount input field and state set if valid input
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('do not set amount when not valid input', () => {
    // simulate typing in the amount input field and do not set state on invalid input
    const value = 'a12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

// make sure onSubmit function received proper arguments
test('call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn(); // create new spy
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />); // render w/ spy onSubmit
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    }); // pass in e for onSubmit function
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    }); // arguments to the onSubmit function
});

test('set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});