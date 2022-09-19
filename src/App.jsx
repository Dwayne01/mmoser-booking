import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
// import { StatefulInput } from 'baseui/input';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DesksPage from './pages/Desks/DesksPage';
import CreateBookingPage from './pages/CreateBooking/CreateBookingPage';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Routes>
            <Route path='/' element={DesksPage} />
            <Route path='/book' element={CreateBookingPage} />
          </Routes>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}