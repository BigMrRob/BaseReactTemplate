import React from 'react';
import Toast from './components/Toast';
import Button from './components/Button';
import { ToastType } from './types/enums';
import { useToastContext } from './context/toast-context';
import { toastInfoObj } from './constants/toastInfoObj';
import { Colors } from './constants/Colors';
import LoadingSpinner from './components/LoadingSpinner';
function App() {
  const { addNotification } = useToastContext();
  return (
    <div>
      <LoadingSpinner />
    </div>
  );
}
export default App;
