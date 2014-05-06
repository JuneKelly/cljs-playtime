// Compiled by ClojureScript 0.0-2197
goog.provide('example.test.hello');
goog.require('cljs.core');
goog.require('example.hello');
goog.require('example.hello');
example.test.hello.run = (function run(){if(cljs.core._EQ_.call(null,example.hello.add_some_numbers.call(null,2,2),4))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"add-some-numbers","add-some-numbers",-1452268074,null),2,2),4)))].join('')));
}
if(cljs.core._EQ_.call(null,example.hello.add_some_numbers.call(null,1,2,3),6))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"add-some-numbers","add-some-numbers",-1452268074,null),1,2,3),6)))].join('')));
}
if(cljs.core._EQ_.call(null,example.hello.add_some_numbers.call(null,4,5,6),15))
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"add-some-numbers","add-some-numbers",-1452268074,null),4,5,6),15)))].join('')));
}
});
