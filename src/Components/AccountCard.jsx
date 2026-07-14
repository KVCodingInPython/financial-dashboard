import react from "react";
import Card from "./Card.jsx";
import Divider from '@mui/material/Divider';

export default function AccountCard({ account }) {
    return (
        <Card>
            <div className = "account-card">
                <h2>{account.name} </h2>

                <Divider orientation = "horizontal" flexItem sx = {{ borderColor: 'black', borderBottomWidth: 1 }} />
                <p> <span className="account-label">Account ID</span><br/>
                    {account.accountId}
                    <Divider orientation = "horizontal" flexItem sx = {{ borderColor: 'black', borderBottomWidth: 1 }} />
                </p>
                <p> <span className = "account-label">Region</span><br/>
                    {account.region}
                    <Divider orientation = "horizontal" flexItem sx = {{ borderColor: 'black', borderBottomWidth: 1 }} />
                    <br/>
                </p>
                <p> <span className = "account-label">Current Spend</span><br/>
                    {account.currentSpend}
                    <Divider orientation = "horizontal" flexItem sx = {{ borderColor: 'black', borderBottomWidth: 1 }} />
                    <br/>
                </p>
                <p> <span className = "account-label">Resources</span><br/>
                    {account.resources}
                    <Divider orientation = "horizontal" flexItem sx = {{ borderColor: 'black', borderBottomWidth: 1 }} />
                    <br/>
                </p>
                <p> <span className = "account-label">Status</span><br/>
                    {account.status}
                    <Divider orientation = "horizontal" flexItem sx = {{ borderColor: 'black', borderBottomWidth: 1 }} />
                    <br/>
                </p>

            </div>

        </Card>
    )
}