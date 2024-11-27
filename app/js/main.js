var apiUrl = 'http://localhost:8000';
// var apiUrl = 'https://innovative-faye-adildevelop-3c32d2c9.koyeb.app/';

$( document ).ready(function () {
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    openMainMenu();
});

function openMainMenu() {
    $.ajax({
        url: window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/menu.html',
        method: 'get',
        success: function (data) {
            document.querySelector('.main-form').innerHTML = data;

            document.getElementById('dokladnoi-choose-btn').addEventListener('click', event => {
                createDokladnoi();
            });

            document.getElementById('umk-choose-btn').addEventListener('click', event => {
                createUmk();
            });
        }
    });
}

function enableTooltips() {
    [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}