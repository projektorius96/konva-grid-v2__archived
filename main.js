import './global.css.js';
import Grid from './src/views/grid.js';
import { loader } from './src/utils.js';
import { Stage, Layer, Group } from 'konva/lib/Core';
import { name } from './package.json';

document.addEventListener('DOMContentLoaded', ()=>{
    document.title = name;
})

let stage = null;
import('./src/configs.js')
.then(({default: configs/*, other non-default comma-separated named exports (if any) */})=>{

    stage = new Stage({
        ...configs?.getAttrs(),
    });

})
.finally(() => {

    const
        initWidth = stage.width()
        ,
        initHeight = stage.height()
    ;

    stage.add(
        loader({
            base: Layer,
            baseProps: {
                name: `${Layer.name.toLowerCase()}-grid`,
            },
            plugins: [
                loader({
                    base: Group,
                    baseProps: {
                        name: `${Group.name.toLowerCase()}-grid`,
                    },
                    plugins: [
                        ...Grid.paint({stage}),
                    ]
                }),
            ]
        })
        ,
        // more instances of {loader}, if any...
    );

    // DEV_NOTE # Responsiveness is handled here...
    window.addEventListener('resize', ()=>{

        stage.setAttrs({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        
        // DEV_NOTE # in the nutshell we swap computed (initial) {stage.width} with {stage.height} and vice versa - you can think of it as a "hacky" inversion
        if (stage.height() > stage.width()){

            stage.setAttrs({
                width: initHeight,
                height: initWidth,
            });

        } else {

            stage.setAttrs({
                width: window.innerWidth,
                height: window.innerHeight,
            });

        }

    });

});