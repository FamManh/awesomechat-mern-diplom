const en = require('./en')
const vn = require('./vn')
const _get = require('lodash/get')
// const ru = require('./ru')

const languages = {
    en: en,
    vn: vn,
}

const format = (message, args)=>{
    if(!message){
        return null;
    }
    return message.replace(/{(\d+)}/g, (match, number) => {
        return typeof args[number] != "undefined" ? args[number] : match;
    });
}

const i18nExists = (languageCode, key)=>{
    const message = _get(languages[languageCode], key);
    return !!message;
}

const i18n = (languageCode, key, ...args)=>{
    const message = _get(languages[languageCode], key);

    if(!message){
        return key;
    }
    return format(message, args);
}

exports.i18n = i18n;
exports.i18nExists = i18nExists;
