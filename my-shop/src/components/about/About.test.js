import { render } from '@testing-library/react';
import { About} from './About';

describe('About Component', () => {
    test('test', () => {
        render(<About />)
        expect(true).toBe(true);
    });
})