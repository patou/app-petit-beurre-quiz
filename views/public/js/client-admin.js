// Socket node
var socket = io();

const messageAdd = 'add'
const messageRemove = 'remove';
const messageFarineTeam = 'event-point-farine';
const messageBeurreTeam = 'event-point-beurre';
const messageReloadPart = 'event-reload-part';
const messageLockBuzz= 'event-lock-buzz';
const messageUnLockBuzz= 'event-unlock-buzz';
const messageNextTransition= 'event-next-transition';
const messageBuzzBadResponse = 'event-bad-response';
const messageClientFarine = 'point-farine';
const messageClientBeurre = 'point-beurre';
const messageToClientReloadPart = 'reload-part';
const messageToClientReceivePoints = 'receive-points-teams';
const messageClientsNeedPointsInformations = 'need-information-points';
const farine = 'team-farine'
const beurre = 'team-beurre';

$buttonAddPointFarine = $('#button-add-point-farine');
$buttonRemovePointFarine = $('#button-remove-point-farine');
$buttonAddPointBeurre = $('#button-add-point-beurre');
$buttonRemovePointBeurre = $('#button-remove-point-beurre');
$buttonBuzzBadResponse = $('#button-buzz-bad-response');

$buttonLockBuzzer = $('#button-lock-buzz');
$buttonUnLockBuzzer = $('#button-unlock-buzz');
$buttonReloadPart = $('#button-reload-part');

$buttonNextTransition = $('#button-next-transition');

$modalReloadPartWarn = $('#modal-reload-part');

$displayPointFarine = $('#display-point-farine');
$displayPointBeurre = $('#display-point-beurre');

var initEvents = function () {
    $buttonAddPointFarine.click(function () {
        socket.emit(messageFarineTeam, messageAdd);
    });
    $buttonRemovePointFarine.click(function () {
        socket.emit(messageFarineTeam, messageRemove);
    });
    $buttonAddPointBeurre.click(function () {
        socket.emit(messageBeurreTeam, messageAdd);
    });
    $buttonRemovePointBeurre.click(function () {
        socket.emit(messageBeurreTeam, messageRemove);
    });
    $buttonReloadPart.click(function () {
        socket.emit(messageReloadPart);
        $modalReloadPartWarn.modal('hide');
    });
    $buttonLockBuzzer.click(function () {
        socket.emit(messageLockBuzz);
    });
    $buttonUnLockBuzzer.click(function () {
        socket.emit(messageUnLockBuzz);
    });
    $buttonNextTransition.click(function(){
        socket.emit(messageNextTransition);
    });
    $buttonBuzzBadResponse.click(function() {
        socket.emit(messageBuzzBadResponse);
    })

    /**
     * Points pour l'équipe farine
     */
    socket.on(messageClientFarine, function (points) {
        $displayPointFarine.val(points);
    });
    /**
     * Points pour l'équipe beurre
     */
    socket.on(messageClientBeurre, function (points) {
        $displayPointBeurre.val(points);
    });

     /**
     * Reception des points des différents équipes
     */
    socket.on(messageToClientReceivePoints, function (pointsFarine, pointsBeurre) {
        $displayPointFarine.val(pointsFarine);
        $displayPointBeurre.val(pointsBeurre);
    });
    socket.on(messageToClientReloadPart, function () {
        $displayPointFarine.val(0);
        $displayPointBeurre.val(0);
    });
    /**
     * On souhaite connaitre le nombre de points
     * Dès que l'on se connecte sur la page
     */
    socket.emit(messageClientsNeedPointsInformations);
}

initEvents();