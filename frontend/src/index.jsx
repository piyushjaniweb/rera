import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './MainApp.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from './context/AuthProvider.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
