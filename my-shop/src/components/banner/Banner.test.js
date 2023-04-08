import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Shop from '../shop/Shop';
import Banner from './Banner';
import { BlogContext } from '../../context/BlogContext';
import { BrowserRouter } from "react-router-dom";

describe('Banner Component', () => {
    test('renders react link Shop', () => {
        render(
            <BrowserRouter>
                <BlogContext.Provider value={false}>
                    <Banner />
                </BlogContext.Provider>
            </BrowserRouter>
        );

        const linkElement = screen.getByTestId("shop-link");
        expect(linkElement).toBeInTheDocument();
    });

    test('link has href attribute with correct value', async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Link to="/shop">Shop now</Link>
            </MemoryRouter>
        );

        expect(getByText('Shop now')).toHaveAttribute('href', '/shop');
    });

    test('Click on Shop now should open shop page', async () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/shop" element={<Shop></Shop>} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            screen.findByRole('link', { name: /shop now/i, hidden: false })
        });
    });
});