import React from 'react';
import './FormCard.css';

const FormCard = (props) => {
    return (
        <div className='form-card'>

            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
            <label>{props.label}</label>

            {props.type === 'input' ?
                <input {...props.input} />
                : props.type === 'textarea' ?
                    <textarea {...props.input} style={{ width: '90%', height: '100px' }} />
                    :
                    (
                        props.items.map(c => {
                            return (
                                <div>
                                    <label htmlFor={c.id}>{c.label}</label>
                                    <input 
                                        key={c.id}
                                        type='radio' 
                                        id={c.id} 
                                        name='some-name'
                                        value={c.value} />
                                </div>
                            )
                        })
                    )
            }

        </div>
    )
}

export default FormCard
