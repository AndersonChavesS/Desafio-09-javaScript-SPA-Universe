import { Router } from './router.js';
const router = new Router();
router.toggle('/', '../pages/home.html');
router.toggle('/universe', '../pages/universe.html');
router.toggle('/exploration', '../pages/exploration.html');
router.toggle(404, '../pages/404.html');
router.handle();
window.onpopstate = router.handle();
window.router = () => router.route();
