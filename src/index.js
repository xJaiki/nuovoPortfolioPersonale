import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Cursor isGelly={true} gellyAnimationAmount={100} gellyAnimationDuration={100} cursorSize={20} cursorBackgrounColor='#fff'/>
    <React.StrictMode >
      <NextUIProvider >
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </React.StrictMode>

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
