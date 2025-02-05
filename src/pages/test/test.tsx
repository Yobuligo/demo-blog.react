import { useState } from "react";

const TestPage: React.FC = () => {
  const [amount, setAmount] = useState(0);

  const onAdd = () =>
    setAmount((previous) => {
      return previous + 1;
    });

  return (
    <div>
      {amount}
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default TestPage;
