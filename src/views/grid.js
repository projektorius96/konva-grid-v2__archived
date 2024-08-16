import { Rect } from 'konva/lib/shapes/Rect';

/** 
 * @param {HTMLDivElement} stage - instance of Konva.Stage
 * @param {Object} [overridenProps={}]   - meant to overwrite, or append properties of {Konva.Rect}, if any
 * @returns {undefined} prepares a batched grid view for loader to be load into the {stage}
 * */
export default class {

    static paint( { stage, overridenProps = {} } ){

    const
        stageWidth = stage.width()
        ,
        cellWidth = stage.getAttr('views').grid.scaling
        ,
        divisor = Math.floor( Number( ( stageWidth / cellWidth ) ) )
        ,
        gridcellMatrix = setRange(cellWidth, cellWidth, stageWidth)
        ,
        matrixList = []
    ;

    if ( gridcellMatrix.length > 0 ) {
    
        for (let i = 0; i <= divisor; i++) {    
    
            for (let k = 0; k <= divisor; k++) {

                matrixList.push(
                    new Rect({
                        name: `row${i+1}-col${k+1}`,
                        x: gridcellMatrix[k],
                        y: gridcellMatrix[i],
                        width: cellWidth,
                        height: cellWidth,
                        stroke: 'black',
                        strokeWidth: 1,
                        ...overridenProps
                    })
                );

            endfor:k;}

        endfor:i;}
        
    endif:;}

    return matrixList;

    }

}

/**
 * @param {Number} start              - range lower bound
 * @param {Number} step               - range step bound
 * @param {Number} end                - range upper bound
 * @param {Boolean} [isIncluded=true] - isIncluded === true ? [start:end] : [start:end)
 * @param {Array} [skip=Array]        - useful for some trigonometry calls such as Math.cos at discrete { 90 | 270 } angle degree units (e.g. when Math.cos resolves to undefined, to avoid such scenario we have this param exposed)
 * @returns {Array}                     range if { [start:end) when isIncluded := false | [start:end] when isIncluded := true } : default is when "isIncluded := true"
 */
function setRange(start, step, end, isIncluded=true, skip = []){
    
    const range = [];
    
    loop1: for (start; start < end + isIncluded; start += step) {

        loop2: for (let items of skip) {

            if (items == start) {

                continue loop1;

            }

        }

        range.push(start);

    }

    return range;
    
}