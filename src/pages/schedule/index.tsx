import { Card } from 'antd';
import React from 'react';

const ScheduleComponent: React.FC = () => {
  const a = <div>1</div>;
  return (
    <>
      <Card
        style={{
          margin: 16,
        }}
      >
        {a}
      </Card>
    </>
  );
};

export default ScheduleComponent;
