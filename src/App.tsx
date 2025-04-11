import React, { useCallback, useState } from "react";
import { generateItems } from "./utils";
import {
  ComplexForm,
  ItemList,
  NotificationProvider,
  NotificationSystem,
  ThemeProvider,
  UserProvider,
  useTheme,
} from "./features";
import { Item } from "./entities";
import { Header } from "./widgets";

const App: React.FC = () => {
  // 상품 상태 관리 - 이 부분은 나중에 별도 context로 분리할 수도 있습니다
  const [items, setItems] = useState<Item[]>(() => generateItems(1000));

  const addItems = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  }, []);

  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>
          <AppContent items={items} onAddItems={addItems} />
        </ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
};

// 별도 컴포넌트로 분리하여 Props 전달
interface AppContentProps {
  items: Item[];
  onAddItems: () => void;
}

const AppContent: React.FC<AppContentProps> = ({ items, onAddItems }) => {
  // useTheme hook 사용
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
    >
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList items={items} onAddItemsClick={onAddItems} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </div>
      <NotificationSystem />
    </div>
  );
};

export default App;
