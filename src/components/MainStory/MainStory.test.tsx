import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainStory from '.';
import { resizeWindow } from '@helper';





describe('<MainStory />', () => {
    it('renders correctly', () => {
        const mainStory = (<MainStory title="Article title" description="Article description" image={""} />)
        expect(mainStory).toMatchSnapshot()

    });
});