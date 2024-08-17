/**
 * > The **loader** function takes single {Object} as its input, and whose properties are as follows:
 * @param {Object} base            - {Konva.Layer | Konva.Group} with the following hierarchy in mind {@link https://konvajs.org/docs/overview.html}
 * @param {Object} [baseProps={}]  - as if `{ Konva.Layer({ ...baseProps }) | Konva.Group({ ...baseProps }) }`, where one of {Konva.Layer | Konva.Group} is your {base}
 * @param {Array}  [plugins=[]]    - {Konva[base].add(`children`)} where each child (view) defined at "./src/views/", e.g. "./src/views/grid.js"
 * @returns                          an instance of {base}
 */
export function loader({base, baseProps = {}, plugins = []}){
    const r = Reflect.construct(base, [baseProps]);
        if (plugins.length > 0) {
            r?.add(...plugins)
        }
    
    return r;
}