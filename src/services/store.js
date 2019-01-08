import _ from 'lodash';
import dataMain from 'data/main';
import dataCompagny from 'data/compagny';
import dataMissions from 'data/missions';
import dataTechology from 'data/technology';

const service = function() {};

service.data = {
    main: dataMain,
    compagny: dataCompagny,
    missions: dataMissions,
    technology: dataTechology,
};

service.prototype.addData = function (key, data) {
    this.data[key] = data;
};

service.prototype.getData = function (key) {
    return !_.isEmpty(this.data[key]) ? this.data[key] : undefined;
};

export default service;