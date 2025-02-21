import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </StrictMode>
);
