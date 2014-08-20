Angular Demo
============

AngularJS App that demonstrates the points in my teaching videos:

1. The app is scaffolded using yeoman usinging bower and grunt
2. Load data via $http service - local json files
3. LocalStorageService to store session data - persist search results between pages
4. Create a details page 
5. Routing - /details/:id
6. Shared service to communicate between sibling controllers
7. Break up our application using html partials with ng-include
8. ng-show breadcrumbs in bootstap header
9. ng-table / ng-repeat


Configuration in app.js

2 JSON data files
  fruit.json - search results table data
  details.json - details page

2 Services
  FruitSearchSvc.js - json data representing the fruit table
  DataSvc.js - shared service used by sibling controllers SearchPanel and SearchResults

4 Controllers
  FruitCtrl.js - parent controller
  SearchPanelCtrl.js  - use selects to filter the table data
  SearchResultsCtrl.js - display results using ng-table
  SearchDetailsCtrl.js - simple details page with back button 

5 Views
  Fruit.html - shell page containing the other views using ng-include
  navbarHeader.html - bootstrap banner using ng-show to display breadcrumbs 
  SearchPanel.html - 2 selects to filter the the data
  SearchResults.html - ng-table / ng-repeat and filters
  SearchDetails.html - simple detail page
  
 Steps to Run Project (assumes you have nodejs installed)
 
 git clone git@github.com:gatortim50/Angular-Fruit-Company.git
 cd Angular-Fruit-Company
 npm install
 bower install ng-table
 bower install angular-local-storage
 grunt serve 



