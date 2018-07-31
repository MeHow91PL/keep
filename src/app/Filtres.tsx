export class filterTypes {
    static typeFilter = 'TYPE_FILTER';
    static labelFilter = 'LABEL_FILTER';
    static thingFilter = 'THING_FILTER';
} 

abstract class Filter{
    protected _type: filterTypes
}

export class SearchFilter extends Filter{
    constructor(){
        super();
        this._type = filterTypes.typeFilter
    }
}