import { UrlIco, LabelIco } from '../Assets/Icons';
import { urlsFilter, labelsFilter } from '../paths';

export const FilterTypes ={
    TYPES_FILTER: 'Types',
    LABELS_FILTER: 'Labels'
}

export const TypeItem = {
    Title: 'Typy',
    Children: [{
        Name: 'URL-e',
        Img: UrlIco,
        Link: urlsFilter,
        ClassName: 'TypeItem',
        FilterName: FilterTypes.TYPES
    }]
}

export const LabelItem = {
    Title: 'Etykiety',
    Children: [{
        Name: 'URL-e',
        Img: LabelIco,
        Link: labelsFilter,
        ClassName: 'LabelItem',
        FilterName: FilterTypes.LABELS_FILTER
    }]
}

