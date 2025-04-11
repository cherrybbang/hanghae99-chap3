import React, { createContext, useCallback, useMemo, useState } from "react";
import { User } from "../../../entities";
import { useNotification } from "../../notify";

interface ContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Context 생성
export const UserContext = createContext<ContextType | undefined>(undefined);

// UserProvider 컴포넌트
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotification();

  const login = useCallback(
    (email: string) => {
      // 실제 구현에서는 여기서 API 호출 등을 수행할 수 있습니다
      setUser({ id: 1, name: "홍길동", email });
      addNotification("성공적으로 로그인되었습니다", "success");
    },
    [addNotification],
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, [addNotification]);

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout],
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
