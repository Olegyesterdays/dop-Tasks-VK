import {MainController} from '';

const routes = {
    '/': MainController,
}

export class Router {
    routing() {
        const URLAdres = routes[window.location.pathname];
        const controller = new URLAdres();
        controller.process();
    }
}

export const router = new Router();
