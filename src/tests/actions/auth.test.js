import { login, logout } from '../../actions/auth';

test('test login action', () => {
    const uid = 'helloworld';
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('test logout action', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    });
});