import {Controller, Get} from '@nestjs/common';

@Controller('/de')
export class AppController {
    @Get('/devanshu')
    getRootRoute() {
        return 'hi there!'
    }

    @Get('/bye')
    getByThere() {
        return 'bye There';
    }
}

// Decorator. In this case this decorator is telling nest that we are creating a class that will serve as a controller inside our application. This is a class that is going to handle and route incoming requests.
//@Controller
// class AppController {
//     // Here, we will define methods. Each method will define one kind of incoming requests. If we want to handle a get request to the root route of our application. We might add in a new method 
//     // here, called something like Get Root Route.
//     @Get()
//     getRootRoute() {
//         // Whenever someone makes a request to our application we want to route that request to this method. To do so, we are going to add another helper from the common library.
//         // Get method - This allows us to create route handlers that responds to incoming request that responds incoming requests that have an http method of get.
//         return 'hi there!'
//     }
// }