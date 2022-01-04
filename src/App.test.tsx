import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("App Components rendering", () => {

    describe("rendering test", () => {
        it("count rendering test", () => {
            const wrap = render(<App/>)
            wrap.getByText("0", {selector: "span"})
        })

        it("button rendering test", () => {
            const wrap = render(<App/>)
            const buttons = wrap.getAllByRole("button")
            expect(buttons).toHaveLength(2)
        })
    })

    describe("action test", () => {
        it("button action test", () => {
            const wrap = render(<App/>)
            const plusButton = wrap.getByRole("button", {name: "+"})
            const minusButton = wrap.getByRole("button", {name: "-"})
            const span = wrap.getByText("0", {selector: "span"})

            expect(span.textContent).toBe("0")
            userEvent.click(plusButton);
            expect(span.textContent).toBe("1")
            userEvent.click(minusButton);
            expect(span.textContent).toBe("0")
            userEvent.click(minusButton);
            expect(span.textContent).toBe("-1")
        })
    })
})
