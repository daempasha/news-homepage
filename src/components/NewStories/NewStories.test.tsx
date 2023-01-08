import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NewStories from '.';
import data from './data';





describe('<NewStories />', () => {
    it('renders correctly', () => {
        const newStories = render(<NewStories {...data} />)
        expect(newStories).toMatchSnapshot()
    });

});