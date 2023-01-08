import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import data from './data';
import SmallStory from '.';





describe('<NewStories />', () => {
    it('renders correctly', () => {
        const newStories = render(<SmallStory index={0} {...data[0]} />)
        expect(newStories).toMatchSnapshot()
    });

});