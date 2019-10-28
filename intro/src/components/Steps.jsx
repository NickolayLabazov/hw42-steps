import React, { useState } from 'react';
import nanoid from 'nanoid';

import DayDist from './DayDist.jsx';
import InputForm from './InputForm.jsx';
import { compare } from './compare.js';



export default function Steps() {

    const [days, setDays] = useState([]);

    const [form, setForm] = useState({
        date: '',
        distance: '',
    })

    const newDays = (day) => {
        setDays(prevDays => [...prevDays, day]);
    }

    const addDist = (day) => {
        setDays(prevDays => prevDays.map(prevDay => prevDay === day ? { id: prevDay.id, date: prevDay.date, distance: String(Number(prevDay.distance) + Number(form.distance)) } : prevDay))

    }

    const remove = (id) => {
        setDays(prevDays => prevDays.filter(prevDay => prevDay.id !== id))
    }

    const inputChange = (e) => {
        e.persist();
        setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }));
    }

    const change = (day) => {
        let changeDay = {
            date: day.date,
            distance: day.distance
        }
        setForm(() => changeDay);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        e.persist();
        let date = form.date.search(/^[0-3][0-9]\.[0-1][0-9]\.[0-9][0-9]$/) === -1
        let dist = form.distance.search(/^[1-9][0-9]*\.?,?[0-9]*$/) === -1;
        if (date) {
            setForm(prevForm => ({ ...prevForm, date: 'Введите дату (ДД.ММ.ГГ)' }));
            console.log(e.target.date.value)
        } else if (dist) {
            setForm(prevForm => ({ ...prevForm, distance: 'Введите дистанцию' }));
        } else {
            let index = days.indexOf(days.find(day => day.date === form.date));
            let day = days[index];
            if (index === -1) {
                newDays({
                    date: form.date,
                    distance: form.distance,
                    id: nanoid(),
                })
            } else {
                addDist(day);
            }
            let changeDay = {
                date: '',
                distance: '',
            }
            setForm(() => changeDay);
        }
    }

    return (
        <div>
            <InputForm
                formSubmit={formSubmit}
                inputChange={inputChange}
                form={form} />
            <table className='steps-infoTable'>
                <tbody>
                    {days.sort((a, b) =>
                        compare(a, b)).map(day => <DayDist key={day.id} day={day}
                            remove={remove}
                            change={change} />)
                    }
                </tbody>
            </table>
        </div>
    );
}