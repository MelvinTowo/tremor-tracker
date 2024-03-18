import { RiCheckboxCircleLine, RiCloseCircleLine } from '@remixicon/react';
import { Icon } from '@tremor/react';

import {
    Accordion,
    AccordionList,
    List,
    ListItem,
    } from '@tremor/react';
    

    const DataTable = ({ jsonData }) => {
      return (
        <AccordionList>
          {jsonData.map((store) => (
            <Accordion key={store.store} className='px-10 py-10'>
                <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Store {store.store}</h3>
                <List>
                  {Object.entries(store.Lanes).map(([laneNumber, laneData]) => (
                    <ListItem key={laneNumber} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{laneNumber}</span>
                      {laneData.Online === 'True' ? 
                        <Icon size="sm" icon={RiCheckboxCircleLine} color="green" /> : 
                        <Icon size="sm" icon={RiCloseCircleLine} color="red" />}
                    </ListItem>
                  ))}
                </List>
            </Accordion>
          ))}
        </AccordionList>
      );
    };
    
    export default DataTable;