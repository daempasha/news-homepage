import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
    it('renders correctly', () => {
        const button = render(<Button children="Submit" />)

        expect(button).toMatchSnapshot()
    });
});