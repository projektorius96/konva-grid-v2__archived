/**
 * > The **loader** function takes single {Object} as its input whose properties are as follows:
 * @param {Object} base            - {Konva.Layer | Konva.Group}
 * @param {Object} [baseProps={}]  - attrs of {base}
 * @param {Array}  [plugins=[]]    - {Konva[base].children} where each child is defined at "./src/views/", e.g. "./src/views/grid.js" 
 * @returns                          an instance of {base}
 */
export function loader({base, baseProps = {}, plugins = []}){
    const r = Reflect.construct(base, [baseProps]);
        if (plugins.length > 0) {
            r?.add(...plugins)
        }
    
    return r;
}