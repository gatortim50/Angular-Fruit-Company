Angular Demo - MEAN stack
=========================

AngularJS App that demonstrates points in my teaching videos:

```
1. The app is scaffolded using yeoman with bower and grunt
2. Load data via $http service - local json files
3. LocalStorageService to store session data - persist search results between pages
4. Create a details page
5. Routing - /details/:id
6. Shared service to communicate between sibling controllers
7. Break up our application using html partials with ng-include
8. ng-show breadcrumbs in bootstap header
9. ng-table / ng-repeat
```
Server:
```
uses node or even better nodemon and express with cors
setup to run by default on: Back End Server running at localhost:3000
the server will serve up the product json

TODO: the server code read mongodb
```

Client:
Configuration in app.js

2 JSON data files - now moved to a back-end node/espress server
```
  fruit.json - search results table data
  details.json - details page
```

2 Services
```
  FruitSearchSvc.js - json data representing the fruit table
  DataSvc.js - shared service used by sibling controllers SearchPanel and SearchResults
```

4 Controllers
```
  FruitCtrl.js - parent controller
  SearchPanelCtrl.js  - use selects to filter the table data
  SearchResultsCtrl.js - display results using ng-table
  SearchDetailsCtrl.js - simple details page with back button
```

5 Views
```
  Fruit.html - shell page containing the other views using ng-include
  navbarHeader.html - bootstrap banner using ng-show to display breadcrumbs
  SearchPanel.html - 2 selects to filter the the data
  SearchResults.html - ng-table / ng-repeat and filters
  SearchDetails.html - simple detail page
```

 Steps to Run Project (assumes you have nodejs installed)

```
 git clone git@github.com:gatortim50/Angular-Fruit-Company.git
 cd Angular-Fruit-Company/server
 npm install
 npm start


 open new window and ...

 cd Angular-Fruit-Company/client
 npm install
 bower install
 grunt serve (or grunt serve --force)
```



