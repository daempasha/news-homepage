import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HamburgerMenu from '.';





describe('<HamburgerMenu />', () => {
    it('renders correctly', () => {
        const hamburgerMenu = render(<HamburgerMenu />)
        expect(hamburgerMenu).toMatchSnapshot()
    });

});