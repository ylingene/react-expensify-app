import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

// get library setup w/ the adapter
// adapter w/ v16 reduces library size for just react v16
Enzyme.configure({
    adapter: new Adapter()
});

DotEnv.config({ path: '.env.test' });