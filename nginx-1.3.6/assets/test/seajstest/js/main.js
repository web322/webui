define(function (require) {


    var $ = require('jquery');
    var mustache = require('mustache');
    var tpl = require('../tpl/test.tpl');

    // test template +object
    var output = mustache.render(tpl, {
        name: "linjing"
    });
    $(output).insertAfter('#content');


    // test json data +template
    var json = require('../data/a.json');
    tpl = require('../tpl/person.tpl');
    output = mustache.render(tpl, json);
    $(output).insertAfter('#content');



    //coffee file test
    //var a = require('../data/b.coffee');
    //console.log("coffee value:"+a.foo);

    //test less
    require('../data/style.less');
    $("#content").addClass("red");

    //test i18n
    var lang = require('../i18n/zh-cn/lang.js')
    console.log(lang['app.key1']);
    for (var prop in lang) console.log(prop + "=" + lang[prop]);

});