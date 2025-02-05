import { useState } from "react";

const TestPage: React.FC = () => {
  const [amount] = useState(0);

  return <div>{amount}</div>;
};

export default TestPage;
