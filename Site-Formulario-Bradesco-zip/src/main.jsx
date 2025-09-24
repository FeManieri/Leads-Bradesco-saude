import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from '@/App';
import ErrorBoundary from "@/ErrorBoundary.jsx";
import '@/index.css';
import { Toaster } from "@/components/ui/toaster";

window.addEventListener("error", e => console.error("window.error", e.error));
window.addEventListener("unhandledrejection", e => console.error("promise", e.reason));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
        <Toaster />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);