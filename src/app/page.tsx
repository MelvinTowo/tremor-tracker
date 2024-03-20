'use client';

import { RiCheckboxCircleLine, RiCloseCircleLine, RiStoreLine } from '@remixicon/react';
import { Badge, Accordion, AccordionBody, AccordionHeader, AccordionList, Card, Title, Text, Icon } from '@tremor/react';
import DataTable from './fetchJSON'; // Import the DataTable component
import DonutCard from './donut'; // Import the DonutCard component
import kroger from '../../data/kroger.json';
import wegmans from '../../data/wegmans.json';
import weis from '../../data/weis.json';
import elrosado from '../../data/elrosado.json';
import daves from '../../data/daves.json';
import incidents from '../../data/incidents';
import PastIncidents from './fetchIncidents';

export default function Home() {
  const jobRunDate = new Date(kroger[0].job_run_date);

  // Format the date as a string. You can adjust this to your preferred format.
  const formattedDate = jobRunDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const renderAccordionItem = (title: string, jsonData: any[]) => {
    const totalOnlineLanes = jsonData.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0);
    const totalOfflineLanes = jsonData.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0);
    const totalStores = jsonData.length;
  
    return (
      <Accordion>
        <AccordionHeader className="text-lg font-medium flex justify-between">
          <div>{title}</div>
          <div className='flex gap-2' style={{ marginLeft: 'auto' }}>
            <Badge color="emerald" icon={RiCheckboxCircleLine} className="text-center" style={{ width: '54px', justifyContent: 'flex-start' }}> {totalOnlineLanes}</Badge>
            {totalOfflineLanes > 0 && 
              <Badge color="red" icon={RiCloseCircleLine} className="text-center" style={{ width: '54px', justifyContent: 'flex-start' }}> {totalOfflineLanes}</Badge>
            }
          </div>   
        </AccordionHeader>
        <AccordionBody className="leading-6">
          <DataTable jsonData={jsonData} />
        </AccordionBody>
      </Accordion>
    );
  };

  return (
    <main className="md:p-4 mx-auto max-w-4xl space-y-6">
      <div className="flex justify-between items-end w-full py-2">
        <Title className="text-4xl">
          Produce Recognition Lane Status
        </Title>
        <div className="text-xs">Last updated {formattedDate} CST</div>
      </div>
      <div className="flex flex-nowrap justify-center gap-4">
        <div className="max-w-sm">
          <DonutCard onlineLanes={kroger.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={kroger.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='Kroger' />
        </div>
        <div className="max-w-sm">
          <DonutCard onlineLanes={wegmans.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={wegmans.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='Wegmans' />
        </div>
        <div className="max-w-sm">
          <DonutCard onlineLanes={weis.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={weis.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='Weis' />
        </div>
        <div className="max-w-sm">
          <DonutCard onlineLanes={elrosado.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={elrosado.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='El Rosado' />
        </div>
        <div className="max-w-sm">
          <DonutCard onlineLanes={daves.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={daves.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='Daves' />
        </div>
      </div>
      <AccordionList className="whitespace-nowrap">
        {renderAccordionItem('Kroger', kroger)}
        {renderAccordionItem('Wegmans', wegmans)}
        {renderAccordionItem('Weis', weis)}
        {renderAccordionItem('El Rosado', elrosado)}
        {renderAccordionItem('Daves', daves)}
      </AccordionList>

      <PastIncidents incidents={incidents} />
    </main>
  );
}