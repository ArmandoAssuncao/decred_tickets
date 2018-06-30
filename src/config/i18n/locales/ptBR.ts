import constants from 'config/constants'

export default {
    app: {
        clickToCopy: 'Clique para copiar',
        clipboardCopy: 'Copiado para a área de transferência',
        errorOpenURL: 'Não foi possível abrir o link {{- link}}',
        github: 'Github',
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
        about: {
            createdBy: `Criado com ❤ por ${constants.AUTHOR}`,
            donate: 'Se você gostou, faça uma doação ;-)',
            source: 'Código Fonte',
            title: 'Sobre',
        },
        home: {
            title: 'Meus Tickets',
            btn: 'Ok',
            input: {
                placeholder: 'Ticket Address',
            },
        },
        settings: {
            notifications: 'Notificações',
            title: 'Configurações',
        },
        ticketDetails: {
            title: 'Tickets',
            noTicketsFound: 'Nenhum ticket encontrado',
        },
    },
}
