import authReducer from '../../reducers/auth';

test('test login reducer', () => {
    const uid = 'helloworld';
    const action = {
        type: 'LOGIN',
        uid
    };
    expect(authReducer({}, action)).toEqual({uid});
});

test('test logout reducer', () => {
    const state = {
        uid: 'helloworld'
    };
    const action = {
        type: 'LOGOUT'
    };
    expect(authReducer(state, action)).toEqual({});
});