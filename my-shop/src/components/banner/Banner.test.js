
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { MemoryRouter, Route, Router, Routes } from "react-router-dom";
import  Shop  from '../shop/Shop';

describe('Banner Component', () => {
    test('Click on Shop now should open shop page', () => {
        render(
          <MemoryRouter>
            <Routes>
                <Route path="/shop" element={<Shop></Shop>} />
            </Routes>
          </MemoryRouter>         
        );

        
        expect(global.window.location.pathname).toBe('/');
        const anchorElement = screen.getByRole('link', { name: /shop now/i })
        screen.debug();
        expect(global.window.location.pathname).toContain(`/shop`);
    });
});