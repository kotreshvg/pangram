import './App.css';
import {react, useState} from 'react';
import axios from 'axios';
import { Button, TableContainer, TableHeader, TableBody, TableCell, TableRow, Table } from '@windmill/react-ui';
import Component1 from './component1';
import {v4 as uuid} from 'uuid';

function App() {  
  const [problem, setProblem] = useState([]);
  const onAdd = () => {
    setProblem([
      ...problem,
      {key:problem.length, data: {}}
    ]);
  }
  const [view, setView] = useState('form');
  const changeView = (page) => {
    setView(page);
  };
  const saveData = (id, data) => {
    let problemCopy = problem;
    problemCopy = problemCopy.filter(ele => ele.key !== id);
    problemCopy.push({
      key: id,
      data: data
    });
    setProblem([...problemCopy]);
  }
  return (
    <>
      <div className={`${view === 'form' ? 'hidden' : ''}`}>
      <TableContainer >
        <Table>
          <TableHeader>
            <TableRow >
              <TableCell >Problem description</TableCell>
              <TableCell >Diagnosed status</TableCell>
              <TableCell >Did start after physical trauma</TableCell>
              <TableCell >Did start after mental trauma</TableCell>
              <TableCell >frequency of problem</TableCell>
              <TableCell >when does problem occur</TableCell>
              <TableCell >Intensity of problem</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              problem.map(ele => {
                return (<TableRow>
                  <TableCell>{(ele.data['problem description'])}</TableCell>
                  <TableCell>{(['diagnosed'] in ele.data) ? ele.data['diagnosed'] : ''}</TableCell>
                  <TableCell>{(['relation to physical trauma'] in ele.data) ? ele.data['relation to physical trauma']: ''}</TableCell>
                  <TableCell>{(['relation to mental trauma'] in ele.data) ? ele.data['relation to mental trauma']: ''}</TableCell>
                  <TableCell>{(['frequency'] in ele.data) ? ele.data['frequency'] : ''}</TableCell>
                  <TableCell>{(['action causing problem'] in ele.data) ? ele.data['action causing problem'] : ''}</TableCell>
                  <TableCell>{(['intensity'] in ele.data) ? ele.data['intensity'] : ''}</TableCell>
                </TableRow>);
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      <div className={`${view === 'table' ? 'hidden' : ''}`}>
      {problem.map(ele => {
          return (
            <Component1 key={ele.key} id={ele.key} save={saveData}/>
          );
        })}
      </div>
        <div className='w-6/12 mx-auto flex justify-center'>
        <Button className={`${view === 'table' ? 'hidden' : ''}`} onClick={onAdd}>add</Button>
        </div>
        <div className='w-6/12 mx-auto flex justify-center'>
          <Button className='m-8' onClick={()=>changeView('form')}>Back</Button>
          <Button className='m-8' onClick={()=>changeView('table')}>Next</Button>
        </div>
    </>
  );
  
}

export default App;
