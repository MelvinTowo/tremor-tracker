import React from 'react';
import { DonutChart, Card} from '@tremor/react';

interface DonutCardProps {
  onlineLanes: number;
  offlineLanes: number;
  customerName: string;
}

const DonutCard: React.FC<DonutCardProps> = ({ onlineLanes, offlineLanes, customerName }) => {
  const data = [
    {
      name: 'Online',
      lanes: onlineLanes,
    },
    {
      name: 'Offline',
      lanes: offlineLanes,
    },
  ];

  const valueFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()} lanes`;

  return (
    <Card className='w-auto'>
      <h3>{customerName}</h3>
      <div>
        <DonutChart
          data={data}
          category="lanes"
          index="name"
          valueFormatter={valueFormatter}
          colors={['green', 'red']}
          className="w-40"
        />
      </div>
    </Card>
  );
};

export default DonutCard;