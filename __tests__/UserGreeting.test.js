import UserGreeting from "@/pages/UserGreeting"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

describe('Check for components rendering', ()=>{
    it('usernameInputRenders',
        ()=>{
          const view =   render(<UserGreeting/>);
          logRoles(view.container);
            let usernameEl = screen.getByRole('textbox', {name: 'User Name'})
            expect(usernameEl).toBeInTheDocument();
        }
    )
    it('renders password input',
        ()=>{
            render(<UserGreeting/>)
            let passwordEl = screen.getByLabelText('Password')
            expect(passwordEl).toBeInTheDocument();
        }
    )
    it('renders submit button',
        ()=>{
            render(<UserGreeting/>)
            let submitEl = screen.getByRole('button')
            expect(submitEl).toBeInTheDocument();
        }
    )
})