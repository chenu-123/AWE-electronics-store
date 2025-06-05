import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { Home } from './components/Dashboard';  // or another home component
import { Shop } from './components/pages/Shop/Shop';
import { Cart } from './components/pages/Cart/Cart';
import { Checkout } from './components/pages/Checkout/Checkout';
import { PurchaseConfirmed } from './components/pages/PurchaseConfirmed/PurchaseConfirmed';

const AppRoutes = [
  { index: true, element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/purchaseConfirmation', element: <PurchaseConfirmed /> },
  { path: '/counter', element: <Counter /> },
  { path: '/fetch-data', element: <FetchData /> }
];

export default AppRoutes;
