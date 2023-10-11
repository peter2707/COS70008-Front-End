import React, { useState } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { FaDownload } from "react-icons/fa6";
import "chart.js/auto";
import "./Dashboard.css";

export function Dashboard() {
    const [selectedSection, setSelectedSection] = useState("HIV Forms");

    const renderSection = () => {
        switch (selectedSection) {
            case "HIV Forms":
                return <HIVForms />;
            case "Accounts":
                return <Accounts />;
            case "Web Traffic":
                return <WebTraffic />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="dashboard-group-switch">
                <div
                    className={`switch-option ${
                        selectedSection === "HIV Forms" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSection("HIV Forms")}
                >
                    HIV Forms
                </div>
                <div
                    className={`switch-option ${
                        selectedSection === "Accounts" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSection("Accounts")}
                >
                    Accounts
                </div>
                <div
                    className={`switch-option ${
                        selectedSection === "Web Traffic" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSection("Web Traffic")}
                >
                    Web Traffic
                </div>
            </div>
            <hr />
            {renderSection()}
        </div>
    );
}

function InfoCard({ title, count }) {
    return (
        <div className="info-card">
            <p>
                <b>{title}</b>
            </p>
            <p>{count}</p>
        </div>
    );
}

// Utility function to convert data to CSV
function convertToCSV(data) {
    const header = Object.keys(data[0]);
    const csvRows = [];

    csvRows.push(header.join(","));

    for (let row of data) {
        csvRows.push(
            header.map((headerName) => String(row[headerName])).join(",")
        );
    }

    return csvRows.join("\n");
}

// Utility function to trigger the download
function downloadCSV(data, filename = "report.csv") {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: "text/csv" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function HIVForms() {
    const testSubmissionCount = 1200;
    const testKitPurchasedCount = 800;
    const newCasesCount = 50;

    const monthlyData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Test Submission",
                data: [100, 110, 105, 115, 120],
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                fill: false,
            },
            {
                label: "Test Kit Purchased",
                data: [80, 90, 85, 88, 86],
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
                fill: false,
            },
            {
                label: "New Cases",
                data: [50, 60, 55, 74, 68],
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                fill: false,
            },
        ],
    };

    const positiveNegativeData = {
        labels: ["Positive", "Negative"],
        datasets: [
            {
                data: [15, 85],
                backgroundColor: ["#FF6384", "#36A2EB"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
        ],
    };

    const casesByStateData = {
        labels: [
            "New South Wales",
            "Victoria",
            "Queensland",
            "South Australia",
            "Western Australia",
        ],
        datasets: [
            {
                label: "Cases",
                data: [300, 250, 100, 50, 150],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const downloadReport = () => {
        const confirmDownload = window.confirm(
            "Do you want to download the HIV Forms Submission Report?"
        );
        if (confirmDownload) {
            const data = monthlyData.labels.map((label, index) => ({
                Month: label,
                "Test Submission": monthlyData.datasets[0].data[index],
                "Test Kit Purchased": monthlyData.datasets[1].data[index],
                "New Cases": monthlyData.datasets[2].data[index],
            }));
            downloadCSV(data, "HIV_Forms_Submission_Report.csv");
        }
    };

    return (
        <div className="section-container">
            <div className="report-container">
                <p>HIV Form Submission Report</p>{" "}
                <button onClick={downloadReport}>
                    <FaDownload />
                </button>
            </div>
            <div className="cards-container">
                <InfoCard title="Test Submission" count={testSubmissionCount} />
                <InfoCard
                    title="Test Kit Purchased"
                    count={testKitPurchasedCount}
                />
                <InfoCard title="New Cases" count={newCasesCount} />
            </div>
            <div className="chart-container">
                <div className="chart-header">Monthly Analysis</div>
                <Line data={monthlyData} />
            </div>
            <div className="chart-container">
                <div className="chart-header">Positive vs Negative Cases</div>
                <Pie data={positiveNegativeData} />
            </div>
            <div className="chart-container">
                <div className="chart-header">Cases by State</div>
                <Bar data={casesByStateData} />
            </div>
        </div>
    );
}

function Accounts() {
    const userCount = 25;
    const userTypeCount = { user: 20, admin: 3 };
    const newUserCount = 5;

    const monthlyUsersData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Total Users",
                data: [2, 4, 9, 10, 25],
                borderColor: "rgba(255, 206, 86, 1)",
                borderWidth: 1,
                fill: false,
            },
            {
                label: "New Users",
                data: [1, 3, 5, 4, 5],
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                fill: false,
            },
        ],
    };

    const userTypesPieData = {
        labels: ["User", "Admin"],
        datasets: [
            {
                data: [userTypeCount.user, userTypeCount.admin],
                backgroundColor: ["#FF6384", "#36A2EB"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
        ],
    };

    const downloadReport = () => {
        const confirmDownload = window.confirm(
            "Do you want to download the User Report?"
        );
        if (confirmDownload) {
            const data = [
                { Category: "User Count", Count: userCount },
                { Category: "New Users", Count: newUserCount },
                { Category: "Admin", Count: userTypeCount.admin },
            ];
            downloadCSV(data, "User_Report.csv");
        }
    };

    return (
        <div className="section-container">
            <div className="report-container">
                <p>User Report</p>{" "}
                <button onClick={downloadReport}>
                    <FaDownload />
                </button>
            </div>
            <div className="cards-container">
                <InfoCard title="User Count" count={userCount} />
                <InfoCard title="New Users" count={newUserCount} />
                <InfoCard title="Admin" count={userTypeCount.admin} />
            </div>
            <div className="chart-container">
                <div className="chart-header">Monthly Analysis</div>
                <Line data={monthlyUsersData} />
            </div>
            <div className="chart-container">
                <div className="chart-header">User Types</div>
                <Pie data={userTypesPieData} />
            </div>
        </div>
    );
}

function WebTraffic() {
    const pageVisits = 154;
    const sessions = 89;
    const avgTimeSpent = "3m 45s";

    const dailyPageVisitsData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
            {
                label: "Page Visits",
                data: [50, 43, 67, 89, 155],
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
                fill: false,
            },
        ],
    };

    const dailySessionsBarData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
            {
                label: "Sessions",
                data: [15, 23, 50, 65, 89],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const deviceTypesPieData = {
        labels: ["Mobile", "Desktop", "Tablet"],
        datasets: [
            {
                data: [12, 25, 5],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const downloadReport = () => {
        const confirmDownload = window.confirm(
            "Do you want to download the Web Traffic Report?"
        );
        if (confirmDownload) {
            const data = dailyPageVisitsData.labels.map((label, index) => ({
                Day: label,
                "Page Visits": dailyPageVisitsData.datasets[0].data[index],
                Sessions: dailySessionsBarData.datasets[0].data[index],
            }));
            downloadCSV(data, "Web_Traffic_Report.csv");
        }
    };

    return (
        <div className="section-container">
            <div className="report-container">
                <p>Web Traffic Report</p>{" "}
                <button onClick={downloadReport}>
                    <FaDownload />
                </button>
            </div>
            <div className="cards-container">
                <InfoCard title="Page Visits" count={pageVisits} />
                <InfoCard title="Sessions" count={sessions} />
                <InfoCard title="Avg Time Spent" count={avgTimeSpent} />
            </div>
            <div className="chart-container">
                <div className="chart-header">Weekly Visits</div>
                <Line data={dailyPageVisitsData} />
            </div>
            <div className="chart-container">
                <div className="chart-header">Weekly Sessions</div>
                <Bar data={dailySessionsBarData} />
            </div>
            <div className="chart-container">
                <div className="chart-header">Device Types</div>
                <Pie data={deviceTypesPieData} />
            </div>
        </div>
    );
}
