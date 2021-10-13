const path = require('path');
let sentryCounts = {
    direct: 0,
    indirect: 0,
};
module.exports = (Franz) => {
    const getMessages = function getMessages() {
        try {
            sentryCounts.direct = document.querySelector('.nav.nav-tabs li:first-child > a span span span span').textContent * 1;
            sentryCounts.indirect = document.querySelector('.nav.nav-tabs li:nth-child(2) > a span span span span').textContent * 1;
        } catch (e) {
        }
        Franz.setBadge(sentryCounts.direct, sentryCounts.indirect);
    };
    Franz.loop(getMessages);
    Franz.injectCSS(path.join(__dirname, 'service.css'));
};