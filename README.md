# Test canal +

The main architecture of this project is based on an open source template called ngx-admin, as well as a customizable Angular UI library called Nebular.

The project contains mainly :

-   Core & theme forlders : which are basically the UI part of the project (a skeleton of the project)
-   Support utility folder : Is the fake backend created for this project to mock backend
-   Custom service folder : Is the fake service to access the backend functionalities created by the support utility
-   Data folder : Is the prvider of the mock data used for this project, keep in mind that the tsv file sent at fist contains 700+Mb of data, which made it difficult to work with, so i used only a small portion of it.
-   Pages folder : this is the main UI project, that covers the whole UI of the test, which basically a dashboard page that covers the functionalities required by the test.

### Installation

Down bellow, are the steps to install the project localy. This project doesn't rely on any external services.

0. Make sure to install dependecies needed to run Angular application : Angular CLI, Node and Typescript
1. Clone the repo
    ```sh
    git clone https://github.com/ZakariaAourir/canal-plus.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Run the project
    ```sh
    npm start
    ```
4. Access the poject localy
    ```sh
    http://localhost:4200/
    ```
