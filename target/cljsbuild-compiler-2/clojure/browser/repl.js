// Compiled by ClojureScript 0.0-2197
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
clojure.browser.repl.xpc_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.browser.repl.repl_print = (function repl_print(data){var temp__4090__auto__ = cljs.core.deref(clojure.browser.repl.xpc_connection);if(cljs.core.truth_(temp__4090__auto__))
{var conn = temp__4090__auto__;return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$74,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)));
} else
{return null;
}
});
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(conn,block){var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,cljs.core.constant$keyword$78,cljs.core.constant$keyword$69,[cljs.core.str(eval(block))].join('')], null);
}catch (e9053){var e = e9053;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$75,cljs.core.constant$keyword$77,cljs.core.constant$keyword$69,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$76,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
}})();return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(connection,url,"POST",data,null,0);
});
/**
* Send data to be printed in the REPL. If there is an error, try again
* up to 10 times.
*/
clojure.browser.repl.send_print = (function() {
var send_print = null;
var send_print__2 = (function (url,data){return send_print.cljs$core$IFn$_invoke$arity$3(url,data,0);
});
var send_print__3 = (function (url,data,n){var conn = clojure.browser.net.xhr_connection();clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$79,((function (conn){
return (function (_){if((n < 10))
{return send_print.cljs$core$IFn$_invoke$arity$3(url,data,(n + 1));
} else
{return console.log([cljs.core.str("Could not send "),cljs.core.str(data),cljs.core.str(" after "),cljs.core.str(n),cljs.core.str(" attempts.")].join(''));
}
});})(conn))
);
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(conn,url,"POST",data,null,0);
});
send_print = function(url,data,n){
switch(arguments.length){
case 2:
return send_print__2.call(this,url,data);
case 3:
return send_print__3.call(this,url,data,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
send_print.cljs$core$IFn$_invoke$arity$2 = send_print__2;
send_print.cljs$core$IFn$_invoke$arity$3 = send_print__3;
return send_print;
})()
;
clojure.browser.repl.order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
clojure.browser.repl.wrap_message = (function wrap_message(t,data){return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,t,cljs.core.constant$keyword$81,data,cljs.core.constant$keyword$82,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.order,cljs.core.inc)], null)], 0));
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){var temp__4090__auto__ = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();if(cljs.core.truth_(temp__4090__auto__))
{var repl_connection = temp__4090__auto__;var connection = clojure.browser.net.xhr_connection();clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,cljs.core.constant$keyword$78,((function (connection,repl_connection,temp__4090__auto__){
return (function (e){return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$83,e.currentTarget.getResponseText(cljs.core.List.EMPTY));
});})(connection,repl_connection,temp__4090__auto__))
);
clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$84,((function (connection,repl_connection,temp__4090__auto__){
return (function (data){return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$85,data));
});})(connection,repl_connection,temp__4090__auto__))
);
clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$74,((function (connection,repl_connection,temp__4090__auto__){
return (function (data){return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2(url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$74,data));
});})(connection,repl_connection,temp__4090__auto__))
);
clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.constantly(null));
return setTimeout(((function (connection,repl_connection,temp__4090__auto__){
return (function (){return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$86,"ready"));
});})(connection,repl_connection,temp__4090__auto__))
,50);
} else
{return alert("No 'xpc' param provided to child iframe.");
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){var repl_connection = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,repl_server_url], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.xpc_connection,cljs.core.constantly(repl_connection));
clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$83,((function (repl_connection){
return (function (js){return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$84,clojure.browser.repl.evaluate_javascript(repl_connection,js));
});})(repl_connection))
);
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constantly(null),((function (repl_connection){
return (function (iframe){return iframe.style.display = "none";
});})(repl_connection))
);
});
