module.exports = Object.freeze({
    /**
     * Messages de base de socket.io
     */
    messageConnection: 'connection',
    messageDisconnected: 'disconnect',
    /**
     * Message de la télécommand admin
     * Pour intérargir avec le jeu
     */
    messageAdd: 'add',
    messageReloadPart: 'event-reload-part',
    messageFarineTeam: 'event-point-farine',
    messageBeurreTeam: 'event-point-beurre',
    messageLockBuzz: 'event-lock-buzz',
    messageUnLockBuzz: 'event-unlock-buzz',
    messageNextTransition: 'event-next-transition',
    messageBuzzBadResponse :'event-bad-response',
    /**
     * Les messages que les clients envoies
     */
    messageClientSendBuzz: 'on-buzz',
    messageClientsNeedPointsInformations: 'need-information-points',
    messageClientNeedStateBuzzer: 'need-state-buzzer',
    /**
     * Les messages à envoyer aux clients
     */
    messageToClientReloadPart: 'reload-part',
    messageToClientFarine: 'point-farine',
    messageToClientBeurre: 'point-beurre',
    messageToClientReceivePoints: 'receive-points-teams',
    messageToClientReceiveBuzz: 'receive-buzz',
    messageToClientLockBuzz: 'receive-lock-buzz',
    messageToClientUnLockBuzz: 'receive-unlock-buzz',
    messageToClientReceiveStateBuzzer:'receive-state-buzzer',
    messageToClientNextTransition: 'receive-next-transition',
    messageToClientReceiveBadResponse: 'receive-buzz-bad-response',
});