require.config({paths:{examplenews:"../../examplenews/js",examplenewscss:"../../examplenews/css"}}),define(function(){"use strict";return{name:"Example News Bundle",initialize:function(a){a.components.addSource("examplenews","/bundles/examplenews/js/components"),a.sandbox.mvc.routes.push({route:"example/news",callback:function(){return'<div data-aura-component="news/list@examplenews" data-aura-name="sulu" />'}}),a.sandbox.mvc.routes.push({route:"example/news/add",callback:function(){return'<div data-aura-component="news/edit@examplenews"/>'}}),a.sandbox.mvc.routes.push({route:"example/news/edit::id",callback:function(a){return'<div data-aura-component="news/edit@examplenews" data-aura-id="'+a+'"/>'}})}}});