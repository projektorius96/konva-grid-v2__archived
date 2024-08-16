import { Node } from 'konva/lib/Node';
import { loader } from './utils';

export default loader({
    base: Node,
    baseProps: {
        container: document.body,
        width: Number( window.innerWidth ),
        height: Number( window.innerHeight ),
        /* DEV_NOTE # The following are konva-grid specific props:.. */
        ['views'] : {
            grid: {
                scaling: 64
            }
        }
    }
});