module.exports = Franz => class Sentry extends Franz {
    overrideUserAgent() {
        const useragent = window.navigator.userAgent;
        const parts = useragent.split('(KHTML, like Gecko)');
        return parts.join('(KHTML, like Gecko) sentry/0.0.250').replace('Electron', 'Sentry').replace('Franz', 'Sentry');
    }
};