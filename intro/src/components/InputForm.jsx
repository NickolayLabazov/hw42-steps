import React from 'react';


export default function InputForm(props) {

    

    return (
        <form action="." className='steps-form' onSubmit={props.formSubmit}>
                <div className='steps-inputBox'>
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input name='date' value={props.form.date} type="text" className='steps-input' onChange={props.inputChange} />
                </div>
                <div className='steps-inputBox'>
                    <label htmlFor="distance">Пройдено км</label>
                    <input name='distance' value={props.form.distance} type="text" className='steps-input' onChange={props.inputChange} />
                </div>
                <button className='steps-button'>Ок</button>
            </form> 
    );
}
