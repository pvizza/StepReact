import React, { createContext, useState } from 'react';

// TODO: improve this context, any solution for have less states?

type PaymentContextType = {
  paymentType: string;
  planType: string;
  addons: string[];
  setPlanType: (planType: any) => void;
  setPaymentType: (paymentType: any) => void;
  setAddon: (addons: any) => void;
};

type PaymentProviderProps = {
  children: React.ReactNode;
};

export const PaymentContext = createContext<PaymentContextType>({
  paymentType: '',
  planType: '',
  addons: [],
  setPlanType: () => {},
  setPaymentType: () => {},
  setAddon: () => {},
});


export const PaymentProvider: React.FC<PaymentProviderProps> = ({ children }) => {
  const [paymentType, setPaymentType] = useState('');
  const [planType, setPlanType] = useState('');
  const [addons, setAddon] = useState<string[]>([]);

  return (
    <PaymentContext.Provider value={{ paymentType, setPaymentType, planType , setPlanType, addons, setAddon}}>
      {children}
    </PaymentContext.Provider>
  );
};