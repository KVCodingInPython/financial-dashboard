import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AccountCard from '../Components/AccountCard.jsx';

import "../css/reset.css"
import "../css/Accounts.css"

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

            <br/>

            <div className = "accounts-content">
                <Stack
                direction={{xs: "column", sm: "row"}}
                divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'black', borderBottomWidth: 2 }}/>}
                spacing={{sm: 10, xs: 6}}>
                        {accounts.map((account) => (
                            <AccountCard
                                key = {account.accountId}
                                account = {account}
                            />
                        ))}
                </Stack>
            </div>
        </>
    );
}



