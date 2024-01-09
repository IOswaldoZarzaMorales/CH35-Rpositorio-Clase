function configuraCookie(nombre, valor, duracionMeses) {
function leggiCookie(nome) {
    let nomeCookie = nome + '=';
    let cookieDecodificato = decodeURIComponent(document.cookie);
    let ca = cookieDecodificato.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        /* while (c.charAt(0) == ' ') {
            c = c.substring(1);
        } */
        c=c.trim(); //tolgo gli spazi vuoti
        if (c.indexOf(nomeCookie) == 0) {
            return c.substring(nomeCookie.length, c.length);//parto dall'uguale fino alla lunghezza della stringa del cookie
        }
    }
    return '';
}
