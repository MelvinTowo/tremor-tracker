import { Card, Title, Text } from '@tremor/react';


interface Incident {
    title: string;
    description: string;
  }
  
  interface PastIncidentsProps {
    incidents: Incident[];
  }

const PastIncidents: React.FC<PastIncidentsProps> = ({ incidents }) => {
  return (
    <div>
      <Title className="text-2xl py-4">Past Incidents</Title>
      {incidents.map((incident, index) => (
        <Card key={index} className='py-4'>
          <Title className="text-2xl">{incident.title}</Title>
          <Text className='text-base'>{incident.description}</Text>
        </Card>
      ))}
    </div>
  );
};

export default PastIncidents;