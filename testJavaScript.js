console.log("hello, JavaScript and github");
console.log("another commit test");

var randomString = function( length ) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i = 0; i < length; i++ ) {
	text += possible.charAt( Math.floor( Math.random() * possible.length ) );
    }

    return text;
}
