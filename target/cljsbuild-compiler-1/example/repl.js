// Compiled by ClojureScript 0.0-2197
goog.provide('example.repl');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
example.repl.connect = (function connect(){return clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
});
goog.exportSymbol('example.repl.connect', example.repl.connect);
