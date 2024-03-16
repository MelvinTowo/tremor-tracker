import { RiCheckboxCircleLine, RiCloseCircleLine } from '@remixicon/react';
import { Icon } from '@tremor/react';

import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionList,} from '@tremor/react';
    

    const DataTable = ({ jsonData }) => {
      return (
        <AccordionList>
          {jsonData.map((store) => (
            <div key={store.store}>
              <AccordionBody>
                <Table className="mt-0">
                  <TableHead>
                    <TableRow >
                      <TableHeaderCell>Store {store.store}</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(store.Lanes).map(([laneNumber, laneData]) => (
                      <TableRow key={laneNumber}>
                        <TableCell>{laneNumber}</TableCell>
                        <TableCell style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          {laneData.Online === 'True' ? 
                            <Icon size="sm" icon={RiCheckboxCircleLine} color="green" /> : 
                            <Icon size="sm" icon={RiCloseCircleLine} color="red" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionBody>
            </div>
          ))}
        </AccordionList>
      );
    };
    
    export default DataTable;