Board 
  has many lists
  title - can click on it and edit in place
List 
  has many cards
  title - can click on it and edit in place
Card
  comments
  description
  labels
  due date - use plugin
  actions
    move
    copy
    subscribe
    archive (delete)
Menu
  Change background color
  Filter
  Activity
  
Header
List of Lists
  List of Cards
Add List
Menu

Collections:
Boards
Lists
Cards
Comments
Labels

Board is a model
  title
  lists: lists collection
  
Lists collection
  list model

List is a model
  title
  has this.cards = Cards collection
  
Card model
  title
  comments
  description
  labels
  due date - use plugin
  actions
    move
    copy
    subscribe
    archive (delete)
  
Cards is a collection
  card as model
    this.comments is collection
  
Comments collection
  has comment as model
  
Views

Board view
  just header with title
List view
  header with title
  ul with Card li items
  Add card input
Card View
  labels
  Title
  subscribed/Due date/description icon/num comments
  
Card modal
  Title
  in list List Title
  Description Edit
  Add Comment
  Activity
  

Menu
  Change Background
  Filter Cards
  Activity

<div id="board"> - hardcode that into index HTML
set that as boardView el so that board view is added to this

List view el should be li since its part of BoardView ul?

Board
  title: "Board"
  lists: {"last_id": 0, "data": [ {title: "title1", cards: {last_id: 0, "data": { ]
