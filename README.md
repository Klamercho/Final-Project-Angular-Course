# Angular Final project - BPO company website

## :point_right: Project Introduction :point_left:

The following project contains a simple business website for a Business Process Outsourcing company. The company name is KLM. 

## :warning: How to load the backedn with sample data! 

Simply start the backend from the branch "Server". After the server is running on localhost:1234 go to these three links: 

http://localhost:1234/clients/initial       

http://localhost:1234/careers/initiatingData

http://localhost:1234/news/initiate

They contain pre-set data, which can be used as placeholder for future data. To create a new user, simply register using the register page. 

## :pencil: Project Description EN

KLM is a BPO company, which provides outsourcing solutions to businesses. This project is KLM's website, which should communicate to the clients in a simple manner - what services are available and what KLM as a company values. Another goal of this project is providing options for potential new recruits an insight into the company's open positions and culture. For potential recruits, there is the option to apply for a job within KLM, once they have registered on the website.
The website aims to keep the layout very simple. It has a navigation bar, contained in the header, as well as a footer containing details for the company and few useful links to the company's social media. Header and footer are available on every page (header is slightly changed for the home page). To improve user experience the website uses Angular animations and Angular Materials (for better looking forms, buttons and spinner). Below in the section "Features and Functionalities" is a more detailed log of everything currently available - function-wise on the website.

## :pencil: Project Description BG

KLM е компания, предлагаща услуги в сферата на отдадените бизнес операции. Този прокет е уебсайтът на компанията KLM, който цели да комуникира по изчистен начин, услугите, предлагани от компанията и нейната обща бизнес култура. Като допълнителна цел на този проект е осигуряването на опция за потенциални нови кандидати да могат да кандидатстват по обяви за работа, предоставени в секцията "Кариери". Самото кандидатстване за определена позиция става, чрез предварителна регистрация. 
Целта на този уебсайт е да има изчистен дизайн. Навигацията се съдържа в заглавната част на всяка страница, заедно с логото. Към всяка страница има и завършваща част, която включва допълнителна информация за бизнеса и няколко полезни линка към социалните мрежи. Тези елементи - заглавна част и завършваща част, са на всяка странциа, като на началната, заглавната част е изменена малко. За по-добър вид са добавени Angular анимации към всичи страници и Angular materials са използвани за по-добри форми, бутони и зареждаща част. 

В долната секция "Възможности и функционалности" са описани всички детайли по различните страници. 


## :bookmark_tabs: Features and Functionalities

In this section all of included pages will be discussed - their functionalities, purpose and elements: 

1. Home page - A simple video background with some welcoming textbox. This page changes the Header component's text color to make it more visible on the video background. 
2. Services - Page which includes a simple overview of available services provided by the company. Links at the bottom lead to the "Culture" section. 
3. About us - Page which shows current employees of the company at the bottom. It also provides information about the company's core ideology 
4. Clients - Page which sends a GET request to the backend and visualizes the current list of Companies, KLM works with. It also includes their testimonies at the bottom. It includes the currently encorporated processes KLM provides for these customers 
5. Culture - Page which outlines the company's culture and values. 
6. Careers - Page which sends a GET request to the backend and displays all of the currently available career opportunities within the company. Users can use the filters to serch for a specific opportunity based on their prefferred location or keyword. When users search, a post request is send to the backend and then handleded to display only the relevant data. Each career can be clicked by unregistered users to get information about it. When a career is clicked, it redirects to a careers-details page
7. Careers-Details - Page which contains information about a specific career. It sends a POST request with information about the career ID and then displays the response. If the user is not currently logged in the website, it will display a "Log in" Button, which the user can click to be redirected to the login page. If the user is logged, he can apply for the position, by clicking the "Apply" or he can logout by clicking the "Log out" button - which deletes the JWT token in their local storage. After a user applies for a position, it is added to their list of applied positions and a new message will be displayed on the screen, saying the user has already applied for that career. 
8. LogIn - Page which contains an Angular Materials form, which when filled sends a request to the server to check if a user with the given credentials exist or not. If it exists, a JWT token is send and is stored in the local storage and the user is redirected to the careers page. If the user does not have a registration on the platform, they can register by clicking the "register now" button, which would redirect them to the Register page. 
9. Register - Page which contains an Angular Materials form, which when filled correctly - sends a POST request to the server to register a new user in the database. When a new user is successfuly created, the user is redirected to the log in page.
10. News - Page which sends a GET request to the backend and displays response in the form of news about the company.



## :thought_balloon: Future improvements

There are many areas where this project could be improved. Below are outlined some of the key-ones, which are obvious setbacks. 

1. Fixing missing links - there are many sections of the website, which are missing a link or could link to somewhere else. For example in the services - each service can link to its own page, where more details can be given about it. 
2. When applying for a career, the user should be prompted to include at least their CV and some contact information. Further, in addition to having the career ID saved in the User data, each career should hold a list of the IDs of users, that have applied for it. 
3. Adding an admin section where information can be easily added to the backend database. For example if a new customer is signed, their information can be added via special section of the webpage. 

~~~~ Below is information from the original Readme file ~~~~ 




# AttemptTwo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
