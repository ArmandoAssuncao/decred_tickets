export default {
    app: {
        name: 'DecredTickets',
    },
    decred: {
        stakePools: {
            decredBrasil: 'stake.decredbrasil.com',
        },
        ticket: {
            revoked: 'Revoked',
            voted: 'Voted',
            expired: 'Expired',
            missed: 'Missed',
            unmined: 'Unmined',
            immature: 'Immature',
            live: 'Live',
        },
    },
    components: {
        picker: {
            backBtn: 'Back',
            header: 'Select {{type}}',
            placeholder: 'Select {{type}}',
        },
    },
    screens: {
        home: {
            title: 'My Tickets',
            btn: 'OK',
            input: {
                placeholder: 'Ticket Address',
            },
        },
    },
}
