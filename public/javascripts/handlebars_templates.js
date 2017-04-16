this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"title_container\"><h1><span class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></h1><div class=\"title_popup\"><h2>Rename Board</h2><form method=\"post\" action=\"/board\" class=\"rename_board\"><label>Name</label><input type=\"text\" /><button class=\"btn\" type=\"submit\">Rename</button></form></div></div><div class=\"lists_container\"><ul id=\"lists\"></ul><div class=\"add_list container\"><div class=\"add_list display\"><form method=\"post\" action=\"/lists\"><input type=\"text\" placeholder=\"Add a list...\" /></form></div><div class=\"add_list action\"><form method=\"post\" action=\"/lists\" class=\"add_list\"><input name=\"list_title\" type=\"text\" placeholder=\"Add a list...\" /><button class=\"btn add_list\" type=\"submit\">Save</button></form></div></div></div>";
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
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<a class=\"close\" href=\"#\">Close Modal</a><div class=\"card_modal\"><h2>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><p>in list <a href=\"#\">List Placeholder</a></p><div class=\"main_container\"><article>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"edit_description container\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"edit_description action\"><form method=\"post\" action=\"/cards\" class=\"edit_description\"><textarea></textarea><button class=\"btn edit_description\" type=\"submit\">Save</button></form></div></div><h2>Add Comment</h2><form><textarea placeholder=\"Write a comment...\"></textarea><button class=\"btn\" type=\"submit\">Send</button></form></article><aside><h3>Add</h3><ul class=\"add\"><li><a href=\"#\">Labels</a></li><li><a class=\"due_date\" href=\"#\">Due Date</a></li></ul><div class=\"date_popup\"><h2>Change Due Date</h2><form method=\"post\" action=\"/cards\" class=\"change_due_date\"><label>Date</label><input type=\"text\" id=\"date_picker\"/><label>Time</label><input type=\"text\" id=\"time_picker\"/><button class=\"btn save\" type=\"submit\">Save</button><button class=\"btn remove\" type=\"reset\">Remove</button></form></div><h3>Actions</h3><ul class=\"actions\"><li><a href=\"#\">Move</a></li><li><a href=\"#\">Copy</a></li><li><a href=\"#\">Subscribe</a></li><li><a href=\"#\">Archive</a></li></ul></aside></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"labels\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"label "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
    + "\"";
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

  return "<p>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><ul id=\"cards\"></ul><div class=\"add_card container\"><div class=\"add_card display\"><a class=\"add_card\" href=\"#\">Add a card...</a></div><div class=\"add_card action\"><form method=\"post\" action=\"/lists\" class=\"add_card\"><textarea></textarea><button class=\"btn add_card\" type=\"submit\">Add</button></form></div></div>";
},"useData":true});