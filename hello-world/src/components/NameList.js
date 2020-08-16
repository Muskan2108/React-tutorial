import React from 'react'
import Person from './Person'

function NameList() {
    const names=['Bruce','Clark','Diana','Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 32,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Clark',
            age: 28,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Diana',
            age: 30,
            skill: 'Vue'
        }
    ]
    const personsList = persons.map(person => <Person key={person.id} person={person}></Person>)
    const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
    
}

export default NameList
