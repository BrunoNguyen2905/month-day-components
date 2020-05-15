import React from 'react';
import App from './App';
import { configure, shallow, assert } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from '@testing-library/react';
//use Enzyme for testing


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// configure({ adapter: new Adapter() });
// describe('Testing table")', () => {
// it("Table has eight tr:s", () => {
// const wrapper = shallow(<App />);
// expect(wrapper.find("tr")).toHaveLength(8);
// });
// });
