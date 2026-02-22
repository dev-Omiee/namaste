'use client';
import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#161622',
          color: '#f5edd8',
          border: '1px solid rgba(201,168,76,0.3)',
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.85rem',
        },
        success: { iconTheme: { primary: '#2ab5a0', secondary: '#0a0a0f' } },
        error: { iconTheme: { primary: '#dc5555', secondary: '#0a0a0f' } },
      }}
    />
  );
}
