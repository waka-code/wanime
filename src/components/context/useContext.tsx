import { createContext, useContext, useState } from 'react';

interface OnlineContextType {
  isOnline: boolean;
  setIsOnline: React.Dispatch<React.SetStateAction<boolean>>;
  userStatus?: React.ReactNode;
}

const OnlineContext = createContext<OnlineContextType>({
  isOnline: false,
  setIsOnline: () => {},
});

export const useOnline = (): OnlineContextType => useContext(OnlineContext);

export const OnlineProvider = ( { userStatus, children }: { userStatus: React.ReactNode, children: React.ReactNode } ) => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <OnlineContext.Provider value={{ isOnline, setIsOnline, userStatus }}>
      {children}
    </OnlineContext.Provider>
  );
};
