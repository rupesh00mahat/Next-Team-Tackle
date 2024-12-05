import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import UserGreeting from '@/pages/UserGreeting';

describe("index components rendering", () => {
    it('check if user greeting renders', ()=>{
        render(<UserGreeting/>)
        let title = screen.getByText(/Next Team Tackle/i);
        expect(title).toBeInTheDocument();
    })
})