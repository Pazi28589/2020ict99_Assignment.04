import { useState } from 'react';
import { animals } from '../data/AnimalsDb';

export default function Main() {
   
    const randomname = () => {
        const index = Math.floor(Math.random() * animals.length);
        return animals[index];
    };


    const [target, setTarget] = useState(randomname);
    const [result, setResult] = useState('null');

    const checker = (animal) => {
        if (animal === target) {
            setResult('Win');
        } else {
            setResult('Lost');
        }
    };

    return (
        <table width="100%" style={{ textAlign: 'center' }}>
            <thead>
                <tr>
                    <th colSpan="4">Animal Game</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="20%">Result</td>
                    <td width="20%">Animal Name</td>
                    <td colSpan="2">Select Animal</td>
                </tr>
                <tr>
                    <td width="20%">{result}</td>
                    <td width="20%">{target.name}</td>
                    <td colSpan="2">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {animals.map((animal, index) => (
                                <div
                                    key={index}
                                    onClick={() => checker(animal)}
                                   
                                >
                                    <img
                                        src={require(`../assets/fig/${animal.img}`)}
                                        alt={animal.name}
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'cover',
                                            borderRadius: '5px',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
