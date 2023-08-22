import React from 'react';

function RecurringProfitTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Product Profit</th>
                    <th>Number of Users</th>
                    <th>Total Months</th>
                    <th>Total Recurring Profit (Annual)</th>
                    <th>Total Recurring Profit</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.productProfit}</td>
                        <td>{item.numUsers}</td>
                        <td>{item.totalMonths}</td>
                        <td>{/* Calculate annual recurring profit */}</td>
                        <td>{/* Calculate total recurring profit */}</td>
                        <td>{/* Add favorite button and notes */}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default RecurringProfitTable;
