import {MainController} from '';

const routes = {
    '/': MainController,
}

export class Router {
    invokeController() {
        const ControllerClass = routes[window.location.pathname];
        const controller = new ControllerClass();
        controller.process();
    }
}

export const router = new Router();
