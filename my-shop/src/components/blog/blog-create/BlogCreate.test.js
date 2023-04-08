import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import BlogCreate from "./BlogCreate";
import { BlogContext } from "../../../context/BlogContext";

describe('BlogCreate Component', () => {
    const handleSubmit = jest.fn()
    const { debug } = render(
        <BrowserRouter>
            <BlogContext.Provider value={false}>
                <BlogCreate onSubmit={handleSubmit} />
            </BlogContext.Provider>
        </BrowserRouter>
    );

    test('should render BlogCreate component correctly', () => {
        debug();
        const headingForm = screen.getByRole('heading', { name: "Create Blog" });
        expect(headingForm).toBeInTheDocument();

        const inputTitle = screen.getByTestId('title-input');
        expect(inputTitle).toBeInTheDocument();
        const inputImageUrl = screen.getByTestId('imageUrl-input');
        expect(inputImageUrl).toBeInTheDocument();
        const inputPublished = screen.getByTestId('published-input', { type: "hidden" });
        expect(inputPublished).toBeInTheDocument();
        const inputUpdated = screen.getByTestId('updated-input', { type: "hidden" });
        expect(inputUpdated).toBeInTheDocument();
        const inputContent = screen.getByTestId('content-input');
        expect(inputContent).toBeInTheDocument();
        const inputQuote = screen.getByTestId('quote-input');
        expect(inputQuote).toBeInTheDocument();
        const inputQuoteAuthor = screen.getByTestId('quoteAuthor-input');
        expect(inputQuoteAuthor).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /create blog/i })).toBeInTheDocument();
        debug();
    });

    test('rendering and submitting a BlogCreate form', () => {
        const handleSubmit = jest.fn()
        render(
            <BrowserRouter>
                <BlogContext.Provider value={false}>
                    <BlogCreate onSubmit={handleSubmit} />
                </BlogContext.Provider>
            </BrowserRouter>
        );

        userEvent.type(screen.getByPlaceholderText(/title/i), 'Test Title')
        userEvent.type(screen.getByPlaceholderText(/image/i), 'img')
        userEvent.type(screen.getByPlaceholderText(/Content of blog post/i), 'Content of blog post')

        userEvent.click(screen.getByRole('button', /submit/i))

        waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                title: 'Test Title',
                imageUrl: 'img',
                content: 'Content of blog post',
            }),
        );
    });
});
