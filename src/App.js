import { ThemeProvider } from 'styled-components';
import {AppContainer} from './components/styles/AppContainer.styled';
import { GlobalStyle } from './components/styles/GlobalStyle';
import {Header} from './components/Header';
import {GraphForm} from './components/GraphForm';

const theme = {
  input:{
    backgroundColor: '#333339',
    hoverBackgroundColor: '#7921fc'
  },
  font:{
    color:'#fff'
  },
  colors: {
    gray: '#46454A',
    purple: '#8739FA',
    lightBlack: '#151418',
    lightGray: 'rgb(150, 150, 160)',
    darkGray: '#242329'
  }
}

function App() {
  return (
    <ThemeProvider theme= {theme}>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <GraphForm />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
