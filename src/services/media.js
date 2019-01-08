import _ from 'lodash';

import png from './../../assets/img/**.png';
import jpg from './../../assets/img/**.jpg';

const service = function () {};

service.media = {
    images: _.merge(png, jpg),
    pathFolder: '/assets/img/'
};

service.prototype.getMedia = function(slug) {
    return this.images[slug];
};

export default service;