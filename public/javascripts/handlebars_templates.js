this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"title_container\"><h1><span class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></h1><div class=\"title_popup\"><h2>Rename Board<span class=\"x_close\">X</span></h2><form method=\"post\" action=\"/board\" class=\"rename_board\"><label>Name</label><input type=\"text\" /><button class=\"btn\" type=\"submit\">Rename</button></form></div></div><div class=\"lists_container\"><ul id=\"lists\"></ul><div class=\"add_list container\"><div class=\"add_list display\"><form method=\"post\" action=\"/lists\"><input type=\"text\" placeholder=\"Add a list...\" /></form></div><div class=\"add_list action\"><form method=\"post\" action=\"/lists\" class=\"add_list\"><input name=\"list_title\" type=\"text\" placeholder=\"Add a list...\" /><button class=\"btn\" type=\"submit\">Save</button><span class=\"x_close\">X</span></form></div></div></div>";
},"useData":true});

this["JST"]["card_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p>Due Date</p><a class=\"due_date\" href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</a>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"edit_description display\"><p class=\"link\">Description <a class=\"edit\" href=\"#\">Edit</a></p><p class=\"description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"edit_description display\"><a class=\"edit\" href=\"#\">Edit the description...</a></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"close\" href=\"#\">Close Modal</a><div class=\"card_modal\"><h2 class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<span class=\"x_close\">X</span></h2><form class=\"change_card_title\" method=\"post\" action=\"/cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /></form><p>in list <a href=\"#\">"
    + alias4((helpers.listTitle || (depth0 && depth0.listTitle) || alias2).call(alias1,(depth0 != null ? depth0.listId : depth0),{"name":"listTitle","hash":{},"data":data}))
    + "</a></p><div class=\"main_container\"><article>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"edit_description container\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"edit_description action\"><form method=\"post\" action=\"/cards\" class=\"edit_description\"><textarea></textarea><button class=\"btn edit_description\" type=\"submit\">Save</button><span class=\"x_close description\">X</span></form></div></div><h2>Add Comment</h2><form class=\"submit_comment\" action=\"/comments\" method=\"post\"><textarea placeholder=\"Write a comment...\"></textarea><button class=\"btn submit_comment\" type=\"submit\">Send</button></form><h2>Activity</h2><ul id=\"comments\"></ul></article><aside><h3>Add</h3><ul class=\"add\"><li><a class=\"labels\" href=\"#\">Labels</a></li><li><a class=\"due_date\" href=\"#\">Due Date</a></li></ul><div class=\"date_popup\"><h2>Change Due Date</h2><form method=\"post\" action=\"/cards\" class=\"change_due_date\"><label>Date</label><input type=\"text\" id=\"date_picker\"/><label>Time</label><input type=\"text\" id=\"time_picker\"/><button class=\"btn save\" type=\"submit\">Save</button><button class=\"btn remove\" type=\"reset\">Remove</button></form></div><h3>Actions</h3><ul class=\"actions\"><li><a class=\"move\" href=\"#\">Move</a></li><li><a class=\"copy\" href=\"#\">Copy</a></li><li><a class=\"subscribe "
    + alias4(((helper = (helper = helpers.subscribed || (depth0 != null ? depth0.subscribed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subscribed","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">Subscribe</a></li><li><a class=\"archive\" href=\"#\">Archive</a></li></ul></aside></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"labels\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"label min id"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></div>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subscribed\"></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"due_date\">"
    + container.escapeExpression(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</div>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"description\"></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"comments\">"
    + container.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"total","hash":{},"data":data}) : helper)))
    + "</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"comment_container\"><p>"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p><a href=\"#\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</a><a class=\"edit_comment\" href=\"#\">Edit</a><a class=\"delete\" href=\"#\">Delete</a></div><div class=\"edit_comment_popup\"><form class=\"edit_comment\" method=\"post\" action=\"/comments/:id\"><textarea></textarea><button type=\"submit\" class='btn'>Save</button><span class=\"x_close comment\">X</span></form></div>";
},"useData":true});

this["JST"]["copy"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<h2>Copy Card <span class=\"x_close\">X</span></h2><form method=\"post\" action=\"/cards\" class=\"copy\"><label>Title</label><textarea name=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><label>Copy to...</label><select name=\"board\" class=\"boards\">"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.board : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><select name=\"list\" class=\"lists\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><select name=\"position\" class=\"positions\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><button class=\"btn\" type=\"submit\">Create Card</button></form>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"info label "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<span class=\"selected\"><img class=\""
    + alias4(((helper = (helper = helpers.selected || (depth0 != null ? depth0.selected : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selected","hash":{},"data":data}) : helper)))
    + "\" src=\"images/check-mark.png\" alt=\"selected\" /></span></span><span class=\"edit\"><a class=\"edit_label\" href=\"#\"><img src=\"images/edit_pencil.png\" /></a></span></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"labels_main\"><h2>Labels<span class=\"x_close\">X</span></h2><input type=\"text\" placeholder=\"Search labels...\" /><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a href=\"#\">Create a new label</a></div><div class=\"labels_change\"></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2 class=\"list_title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><form class=\"list_title\" method=\"post\" action=\"/lists/:id\"><input type=\"text\" /></form><ul class=\"cards "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></ul><div class=\"add_card container\"><div class=\"add_card display\"><a class=\"add_card\" href=\"#\">Add a card...</a></div><div class=\"add_card action\"><form method=\"post\" action=\"/lists\" class=\"add_card\"><textarea></textarea><button class=\"btn add_card\" type=\"submit\">Add</button><span class=\"x_close\">X</span></form></div></div>";
},"useData":true});

this["JST"]["notification"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</p><time>"
    + alias4(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</time>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Notifications <span class=\"x_close\">X</span></h2><article class=\"notifications\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.notifications : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</article>";
},"useData":true});

this["JST"]["search"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " href=\"#\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a><p>in <span class=\"list_title\">"
    + alias4((helpers.listTitle || (depth0 && depth0.listTitle) || alias2).call(alias1,(depth0 != null ? depth0.listId : depth0),{"name":"listTitle","hash":{},"data":data}))
    + "</span> on <span class=\"board_title\">"
    + alias4((helpers.boardTitle || (depth0 && depth0.boardTitle) || alias2).call(alias1,(depth0 != null ? depth0.listId : depth0),{"name":"boardTitle","hash":{},"data":data}))
    + "</span></p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Cards</h2><ul class=\"search_results\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.matchingCards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><p>Type to search for match in card titles and descriptions</p>";
},"useData":true});