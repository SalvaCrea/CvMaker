import _ from 'lodash';

import png from './../../assets/img/**.png';
import jpg from './../../assets/img/**.jpg';

const media = {
    images: _.merge(png, jpg),
    pathFolder: '/assets/img/'
};

media.getMedia = function(slug) {
    return this.images[slug];
};

export default media;