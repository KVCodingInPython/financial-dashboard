import Card from '../Components/Card.jsx';
import Table from '../Components/Table.jsx';
import "../css/Accounts.css";

const accounts = [
    {
        name: 'AWS Production',
        accountId: '1',
        region: 'eu-west-2',
        currentSpend: '£2,310',
        resources: 24,
        status: 'Connected',
    },
    {
        name: 'Azure Development',
        accountId: '2',
        region: 'eu-west-2',
        currentSpend: '£2,310',
        resources: 24,
        status: 'Connected',
    },
    {
        name: 'Google Cloud Analytics',
        accountId: '3',
        region: 'eu-west-2',
        currentSpend: '£2,310',
        resources: 24,
        status: 'Connected',
    },
];

export default function Accounts() {
    return (
        <>
            <h1>Accounts</h1>
            <Card>
                <div className="accounts-table-card">
                    <h2>Accounts List</h2>
                    <p>Cloud accounts currently connected to your workspace.</p>
                    <div className="accounts-table-scroll">
                        <Table
                            headers={[
                                "Account",
                                "Account ID",
                                "Region",
                                "Current Spend",
                                "Resources",
                                "Status",
                            ]}
                            data={accounts.map((account) => [
                                account.name,
                                account.accountId,
                                account.region,
                                account.currentSpend,
                                account.resources,
                                account.status,
                            ])}
                        />
                    </div>
                </div>
            </Card>
        </>
    );
}


