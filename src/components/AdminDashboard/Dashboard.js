import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export function Dashboard() {
    const [data, setData] = useState({
        usersCount: 12345,
        testKitPurchases: 5678,
        newHIVCases: 90,
        monthlyCounts: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' /* ... */],
            datasets: [
                {
                    label: 'Total Users',
                    data: [12, 19, 30, 100, 80, 130, 100, 150, 200, 160 /* ... */],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Test Kit Purchases',
                    data: [5, 10, 40, 60, 35, 70, 65, 80, 90, 75 /* ... */],
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'New HIV Cases',
                    data: [1, 5, 20, 10, 15, 7, 9, 5, 12, 14, 8 /* ... */],
                    borderColor: 'rgba(20, 144, 234, 1)',
                    borderWidth: 1,
                    fill: false
                }
            ]
        },
        visitorsCount: 7890,
        deviceDistribution: {
            labels: ['Mobile', 'Desktop', 'Tablet'],
            datasets: [{
                data: [65, 30, 5],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        visitorTrends: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{
                label: 'Visitors',
                data: [123, 234, 345, 456, 567],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        }
    });

    const fetchDataFromBackend = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };

    useEffect(() => {
        fetchDataFromBackend().then(responseData => {
            setData(responseData);
        });
    }, []);

    return (
        <div>
            {/* 1st Section: Counts */}
            <div className="dashboard-cowunts">
                <div className="user-count">
                    <h4>Total Users</h4>
                    <p>{data.usersCount}</p>
                </div>
                <div className="test-kit-count">
                    <h4>Test Kit Purchases</h4>
                    <p>{data.testKitPurchases}</p>
                </div>
                <div className="hiv-cases-count">
                    <h4>New HIV Cases</h4>
                    <p>{data.newHIVCases}</p>
                </div>
            </div>

            {/* 2nd Section: Line Charts */}
            <div className="dashboard-charts">
                <Line data={data.monthlyCounts} />
            </div>

            {/* 3rd Section: Web Traffic Stats */}
            <div className="web-traffic-stats">
                <div className="visitor-count">
                    <h4>Visitor Count</h4>
                    <p>{data.visitorsCount}</p>
                </div>

                <div className="device-distribution">
                    <h4>Device Type Distribution</h4>
                    <Pie data={data.deviceDistribution} />
                </div>

                <div className="visitor-trends">
                    <h4>Visitor Trends</h4>
                    <Line data={data.visitorTrends} />
                </div>
            </div>
        </div>
    );
}
