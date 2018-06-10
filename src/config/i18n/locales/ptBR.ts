export default {
    app: {
        name: 'DecredTickets',
    },
    decred: {
        stakePools: {
            decredBrasil: 'stake.decredbrasil.com',
        },
        ticket: {
            revoked: 'Revogados',
            voted: 'Votados',
            expired: 'Expirados',
            missed: 'Perdidos',
            unmined: 'Não minerados',
            immature: 'Imaturos',
            live: 'Vivos',
        },
    },
    components: {
        picker: {
            backBtn: 'Voltar',
            header: 'Selecione a {{type}}',
            placeholder: 'Selecione a {{type}}',
        },
        cardTicketDetails: {
            transaction: 'Transação',
        },
    },
    screens: {
        home: {
            title: 'Meus Tickets',
            btn: 'Ok',
            input: {
                placeholder: 'Ticket Address',
            },
        },
        ticketDetails: {
            title: 'Tickets',
            noTicketsFound: 'Nenhum ticket encontrado',
        },
    },
}
