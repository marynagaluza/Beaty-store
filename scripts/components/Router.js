class Router {
    routes = [];
    constructor () {
        this.listen()
    }

    add = (path, cb) => {
        this.routes.push({path, cb});
        return this;
    }

    getFragment = () => {
        let fragment = '';
        const match = window.location.href.match(/#(.*)$/);
        fragment = match ? match[1] : '';
        return fragment;
    }

    listen = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.interval, 50);
    }

    interval = () => {
        if (this.current === this.getFragment()) return;
        this.current = this.getFragment();
        this.routes.some(route => {
            const match = this.current.match(route.path)
            if(match) {
                match.shift()
                route.cb(match[0])
            }
            return false;
        })
    }
}

const router = new Router();

export { router }