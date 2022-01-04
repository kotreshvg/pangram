import React, { useState, useEffect} from 'react';
import {Label, Input, Textarea} from '@windmill/react-ui';

function Component1(props) {
    const [pageState, setPageState] = useState({});
    const onChange = (field, event) => {
        setPageState({
            ...pageState,
            [field]: event.target.value
        });
    };
    const onChangeCheckbox = (field, event) => {
        let temp = [];
        if([field] in pageState) {
            temp = pageState[field];
        }
        event.target.checked ?
            temp.push(event.target.value) :
            temp = temp.filter(val => val !== event.target.value);
        setPageState({
            ...pageState,
            [field]: temp
        });
    };
    useEffect(() => {
        props.save(props.id, pageState);
        // console.log(props.id);
        // console.log(pageState);
    }, [pageState]);
    return (
        <div className='w-full mt-8'>
            <h1 className='text-4xl font-bold text-center'>Pain and Functional Description</h1>
            <h6 className='text-center font-bold'>The description of the current situation gives you optimum 
                Trainer a picture of and clues to the underlying causes of your problems</h6>
            <h6 className='text-center font-bold'>If you have problems with pain/aches, stiffness, weakness of functional problems, 
                describe this/them below.
            </h6>
            <Textarea className='border w-7/12 m-8 mx-auto h-12 border-slate-300' name='problem description' onChange={(e) => onChange('problem description',e)}></Textarea>
            <div className='flex flex-row w-6/12 mx-auto mt-8 flex-wrap'>
                <h4 className='font-bold'>Have you been diagnosed with this problem ?</h4>
                <Label className='ml-4'>Not relevent</Label><Input value='Not relevent' onClick={(e)=>onChange('diagnosed', e)} name='diagnosed' type="radio"/>
                <Label className='ml-4'>Yes</Label><Input value='Yes' onClick={(e)=>onChange('diagnosed', e)} name='diagnosed' type="radio"/>
                <Label className='ml-4'>No</Label><Input value='No' onClick={(e)=>onChange('diagnosed', e)} name='diagnosed' type="radio"/>
            </div>
            <div className='flex flex-row w-6/12 mx-auto mt-8 flex-wrap'>
                <h4 className='font-bold'>Did the problem start after a physical trauma ?</h4>
                <Label className='ml-4'>Not relevent </Label><Input value='Not relevent' onClick={(e)=>onChange('relation to physical trauma', e)} name='relation to physical trauma' type='radio'/>
                <Label className='ml-4'>Yes</Label><Input value='Yes' onClick={(e)=>onChange('relation to physical trauma', e)} name='relation to physical trauma' type='radio'/>
                <Label className='ml-4'>No</Label><Input value='No' onClick={(e)=>onChange('relation to physical trauma', e)} name='relation to physical trauma' type='radio'/>
            </div>
            <div className='flex flex-row w-6/12 mx-auto mt-8 flex-wrap'>
                <h4 className='font-bold'>Did the problem start after meantal trauma ?</h4>
                <Label className='ml-4'>Not relevent</Label><Input value='Not relevent' onClick={(e)=>onChange('relation to mental trauma', e)} name='relation to mental trauma' type='radio'/>
                <Label className='ml-4'>Yes</Label><Input value='Yes' onClick={(e)=>onChange('relation to mental trauma', e)} name='relation to mental trauma' type='radio'/>
                <Label className='ml-4'>No</Label><Input value='No' onClick={(e)=>onChange('relation to mental trauma', e)} name='relation to mental trauma' type='radio'/>
            </div>
            <div className='flex flex-row w-6/12 mx-auto mt-8 flex-wrap'>
                <h4 className='font-bold'>How often do you experience the problem ?</h4>
                <Label className='ml-4'>Not relevent</Label><Input value='Not relevent' onClick={(e)=>onChange('frequency', e)} name='frequency' type='radio'/>
                <Label className='ml-4'>Daily</Label><Input value='Daily' onClick={(e)=>onChange('frequency', e)} name='frequency' type='radio'/>
                <Label className='ml-4'>Several times/week</Label><Input value='Several times/week' onClick={(e)=>onChange('frequency', e)} name='frequency' type='radio'/>
                <Label className='ml-4'>A few times/month</Label><Input value='A few times/month' onClick={(e)=>onChange('frequency', e)} name='frequency' type='radio'/>
                <Label className='ml-4'>A few times/year</Label><Input value='A few times/year' onClick={(e)=>onChange('frequency', e)} name='frequency' type='radio'/>
            </div>
            <div className='flex flex-row w-6/12 mx-auto mt-8 flex-wrap'>
                <h4 className='font-bold'>When do you experience the problem ?</h4>
                <Label className='ml-4'>Not relevent</Label><Input value='Not relevent' onClick={(e)=>{onChangeCheckbox('action causing problem',e)}} name='action causing problem' type='checkbox'/>
                <Label className='ml-4'>When lying down</Label><Input value='When lying down' onClick={(e)=>{onChangeCheckbox('action causing problem',e)}} name='action causing problem' type='checkbox'/>
                <Label className='ml-4'>when sitting</Label><Input value='when sitting' onClick={(e)=>{onChangeCheckbox('action causing problem',e)}} name='action causing problem' type='checkbox'/>
                <Label className='ml-4'>Under standing</Label><Input value='Under standing' onClick={(e)=>{onChangeCheckbox('action causing problem',e)}} name='action causing problem' type='checkbox'/>
                <Label className='ml-4'>In walking</Label><Input value='In walking' onClick={(e)=>{onChangeCheckbox('action causing problem',e)}} name='action causing problem' type='checkbox'/>
            </div>
            <div className='flex flex-row w-6/12 mx-auto mt-8 flex-wrap'>
                <h4 className='font-bold'>How intense is the experience of the problem in average on a 10 scale ?</h4>
                <Label className='ml-4'>1</Label><Input value='1' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>2</Label><Input value='2' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>3</Label><Input value='3' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>4</Label><Input value='4' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>5</Label><Input value='5' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>6</Label><Input value='6' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>7</Label><Input value='7' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>8</Label><Input value='8' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>9</Label><Input value='9' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
                <Label className='ml-4'>10</Label><Input value='10' onClick={(e)=>onChange('intensity', e)} name='intensity' type='radio'/>
            </div>
        </div>
    )
}

export default Component1
