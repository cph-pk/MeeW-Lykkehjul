import { render, screen } from '@testing-library/react';
import App from './components/App';
import Home from './components/Home';
import Winners from './components/Winners';

test('renders a linkname in Reactrouter', () => {
  render(<App />);
  const linkName = screen.getByText(/Home/i);
  expect(linkName).toBeInTheDocument();
});
test('renders a part of text in Home component', () => {
  render(<Home />);
  const partOfText = screen.getByText(/simpel test af/i);
  expect(partOfText).toBeInTheDocument();
});
test('renders a part of text in Winners component', () => {
  render(<Winners />);
  const partOfText = screen.getByText(/gevinster fra alle/i);
  expect(partOfText).toBeInTheDocument();
});
