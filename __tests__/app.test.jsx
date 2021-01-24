import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/app';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render the component', () => expect(shallow(<App />).exists()).toBe(true));
});
