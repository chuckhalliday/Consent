import { AuthProvider } from '../hooks/useAuth';

import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider> 
  );
}

export default App
