import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import BlogItem from "./BlogItem";

describe('BlogItem Component', () => {
    test('Show title', () => {
        const title = 'Test Title';

        render(
            <BrowserRouter>
                <BlogItem _id={'id'} title={title} />
            </BrowserRouter>
        );

        expect(screen.queryByText(title)).toBeInTheDocument()
    });  
    
    test('Click on details', async () => {
        global.window = { location: { pathname: null } };
        const itemId = 'id';

        render(
            <BrowserRouter>
                <BlogItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Read More'));

        expect(global.window.location.pathname).toContain(`/blog-catalog/${itemId}`);
    });
})