// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import Provider from '@/app/Provider';
// import store from '../../../../Store/store';
// import Contribution from './Contribute';
//
// describe('Contribute', () => {
//     render(
//         <Provider>
//             <Contribution isModelOpen={true} CloseModel={() => {}} testId={'contribute'} />
//         </Provider>
//     );
//
//     it('Click CheckBox', () => {
//         const checkBox = screen.getByTestId('contribute-checkbox');
//         expect(checkBox).toBeInTheDocument();
//         fireEvent.click(checkBox);
//         expect(checkBox).toBeChecked();
//     });
//
//     it('Enter transaction ID', () => {
//         const inputBox = screen.getByPlaceholderText("Enter Transaction ID")
//         expect(inputBox).toBeInTheDocument();
//         fireEvent.input(inputBox, { target: { value: 'TEST-01' } });
//     });
//
//
//     it('Enter transaction ID', () => {
//         const inputBox = screen.getByLabelText('amount');
//         expect(inputBox).toBeInTheDocument();
//         fireEvent.input(inputBox, { target: { value: 'TEST-01' } });
//     });
// });
