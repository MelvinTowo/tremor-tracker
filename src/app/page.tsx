'use client';

import { RiCheckboxCircleLine, RiCloseCircleLine } from '@remixicon/react';
import { Badge, Accordion, AccordionBody, AccordionHeader, AccordionList, Card, Title, Text } from '@tremor/react';
import DataTable from './fetchJSON'; // Import the DataTable component
import DonutCard from './donut'; // Import the DonutCard component
import kroger from '../../data/kroger.json';
import wegmans from '../../data/wegmans.json';
import weis from '../../data/weis.json';
import elrosado from '../../data/elrosado.json';
import daves from '../../data/daves.json';

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
  
    return (
      <Accordion>
        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {title}
          <div className='w-full' style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Badge color="emerald" icon={RiCheckboxCircleLine}> {totalOnlineLanes} Online </Badge>
            {totalOfflineLanes > 0 && 
              <div style={{ paddingLeft: '4px' }}>
                <Badge color="red" icon={RiCloseCircleLine}> {totalOfflineLanes} Offline </Badge>
              </div>
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
    <main className="md:p-4 mx-auto max-w-4xl space-y-8">
      <div className="flex justify-between w-full">
        <Title>
          TGCS PR Lane Dashboard - Last updated {formattedDate}
        </Title>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm m-4">
          <DonutCard onlineLanes={kroger.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={kroger.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='Kroger' />
        </div>
        <div className="max-w-sm m-4">
          <DonutCard onlineLanes={wegmans.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={wegmans.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='Wegmans' />
        </div>
        <div className="max-w-sm m-4">
          <DonutCard onlineLanes={weis.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={weis.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='Weis' />
        </div>
        <div className="max-w-sm m-4">
          <DonutCard onlineLanes={elrosado.reduce((total, item) => total + Number(item.Number_of_online_lanes), 0)} offlineLanes={elrosado.reduce((total, item) => total + Number(item.Number_of_offline_lanes), 0)} customerName='El Rosado' />
        </div>
        <div className="max-w-sm m-4">
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
    </main>
  );
}