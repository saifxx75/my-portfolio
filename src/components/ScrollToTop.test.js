import { render } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

let mockPathname = '/about';

jest.mock(
  'react-router-dom',
  () => ({
    useLocation: () => ({ pathname: mockPathname })
  }),
  { virtual: true }
);

test('scrolls to the top when the pathname changes', () => {
  const scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  const { rerender } = render(<ScrollToTop />);

  scrollTo.mockClear();
  mockPathname = '/projects';
  rerender(<ScrollToTop />);

  expect(scrollTo).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    behavior: 'auto'
  });

  scrollTo.mockRestore();
});
