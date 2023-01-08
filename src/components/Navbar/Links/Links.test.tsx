import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Links from './index';

describe('<Links />', () => {
    it('renders correctly', () => {
        const links = render(<Links />)
        expect(links).toMatchSnapshot()
    });

});