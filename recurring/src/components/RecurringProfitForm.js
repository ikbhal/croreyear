import React, { useState } from 'react';

function RecurringProfitForm({ onSubmit }) {
    const [productProfit, setProductProfit] = useState('');
    const [numUsers, setNumUsers] = useState('');
    const [totalMonths, setTotalMonths] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ productProfit, numUsers, totalMonths });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
            {/* Use controlled components with onChange handlers */}
            <p>Product Profit</p>
            <input type="number" value={productProfit} onChange={(e) => setProductProfit(e.target.value)} /> <br/>
            <p>Number of Users</p>
            <input type="number" value={numUsers} onChange={(e) => setNumUsers(e.target.value)} /> <br/>
            <p>Total Months</p>
            <input type="number" value={totalMonths} onChange={(e) => setTotalMonths(e.target.value)} /> <br/>

            <button type="submit">Calculate</button>
        </form>
    );
}

export default RecurringProfitForm;
