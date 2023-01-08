import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainStory from '.';
import { resizeWindow } from '@helper';
import Navbar from '.';





describe('<Navbar />', () => {
    it('renders correctly', () => {
        const navbar = render(<Navbar />)
        expect(navbar).toMatchSnapshot()
    });

});