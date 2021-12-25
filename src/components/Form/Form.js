import React from 'react'
import DetailsComponent from '../DetailsComponent/DetailsComponent'
import FormCard from './FormCard/FormCard'
import './Form.css';

const Form = () => {
    const txt = 'Aut explicabo cupiditate a explicabo reiciendis et sapiente voluptas sit unde enim. Harum commodi et consequatur inventore id odit odio et eius repellendus ut animi adipisci hic exercitationem quia ut sapiente galisum.';

    const radio = [{
        id:"n1",
        value:'name-1',
        label:'1st Option'
    },
    {
        id:"n2",
        value:'name-2',
        label:'2nd Option'
    },
    {
        id:"n3",
        value:'name-3',
        label:'3rd Option'
    }];
   
    return (
        <DetailsComponent style={{ backgroundColor: 'rgb(219, 224, 230)' }}>
            <div className='forms'>
                <FormCard title="Question 1" type='textarea' subtitle={txt} input={{ type: "text", placeholder: "enter here..." }} />
                <FormCard title="Question 2" type='radio' items={radio} subtitle='pick one option' />
                <FormCard title="Question 3" type='textarea' subtitle={txt} input={{ type: "text", placeholder: "enter here..." }} />
            </div>
        </DetailsComponent>
    )
}

export default Form;
