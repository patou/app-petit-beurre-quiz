$buttonFarine = $('#buzz-button-farine');
$buttonBeurre = $('#buzz-button-beurre');

// La base de l'url de redirection
const baseRedirectUrl = '/buzzer';

const initEvents = function () {
    $buttonFarine.click(function () {
        location.href = baseRedirectUrl + '?team=team-farine';
    });
    $buttonBeurre.click(function () {
        location.href = baseRedirectUrl + '?team=team-beurre';
    });
}

initEvents();