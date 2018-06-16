import constants from 'config/constants'

export default {
    app: {
        clickToCopy: 'click to copy',
        clipboardCopy: 'Copied to the clipboard',
        errorOpenURL: 'Could not open link {{- link}}',
        github: 'Github',
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
        cardTicketDetails: {
            transaction: 'Transaction',
        },
    },
    screens: {
        about: {
            createdBy: `Created with ❤ by ${constants.AUTHOR}`,
            donate: 'If you liked it, donate ;-)',
            source: 'Source Code',
            title: 'About',
        },
        home: {
            title: 'My Tickets',
            btn: 'OK',
            input: {
                placeholder: 'Ticket Address',
            },
        },
        settings: {
            notifications: 'Notifications',
            title: 'Settings',
        },
        ticketDetails: {
            title: 'Tickets',
            noTicketsFound: 'No tickets found',
        },
    },
}
