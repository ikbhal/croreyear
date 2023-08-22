import React, { useState } from 'react';
import RecurringProfitForm from './components/RecurringProfitForm';
import RecurringProfitTable from './components/RecurringProfitTable';

function App() {
    const [data, setData] = useState([]);

    const handleFormSubmit = (formData) => {
        // Calculate annual and total recurring profits here
        const newData = [...data, formData];
        setData(newData);
        // Save to local storage
        localStorage.setItem('recurringProfitData', JSON.stringify(newData));
    };

    return (
        <div>
            <h1>Recurring Profit Calculator</h1>
            <RecurringProfitForm onSubmit={handleFormSubmit} />
            <hr/>
            <RecurringProfitTable data={data} />
        </div>
    );
}

export default App;
