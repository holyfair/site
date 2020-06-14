import React from 'react'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'
import Main from '../Components/Main'
import History from '../Components/History'
import Footer from '../Components/Footer'
import AuthMain from '../Components/AuthMain'

import renderer from 'react-test-renderer'

test('SignIn snapshot test', () => {
    const tree = renderer.create(
        <SignIn />
    );
    expect(tree).toMatchSnapshot();
});
test('SignUp snapshot test', () => {
    const tree = renderer.create(
        <SignUp />
    );
    expect(tree).toMatchSnapshot();
});
test('Main snapshot test', () => {
    const tree = renderer.create(
        <Main />
    );
    expect(tree).toMatchSnapshot();
});
test('History snapshot test', () => {
    const tree = renderer.create(
        <History />
    );
    expect(tree).toMatchSnapshot();
});
test('AuthMain snapshot test', () => {
    const tree = renderer.create(
        <AuthMain />
    );
    expect(tree).toMatchSnapshot();
});
test('Footer snapshot test', () => {
    const tree = renderer.create(
        <Footer />
    );
    expect(tree).toMatchSnapshot();
});