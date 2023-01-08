import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainStory from '.';
import { resizeWindow } from '@helper';





describe('<MainStory />', () => {
    it('renders correctly on desktop', () => {
        const mainStory = (<MainStory title="Article title" description="Article description" image={""} />)
        expect(mainStory).toMatchSnapshot()

    });
    it('renders correctly on mobile', () => {
        resizeWindow(640, 1080)
        const mainStory = (<MainStory title="Article title - mobile" description="Article description mobile" image={""} />)
        expect(mainStory).toMatchSnapshot()


    });

});