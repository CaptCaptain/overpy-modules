const availableLanguages = obj.availableLanguages
const practiceRangeTranslations = obj.practiceRangeTranslations
const translations = obj.translations

result = 'globalvar practiceRangeTranslations = ' + '[' + practiceRangeTranslations.join() + ']';

for (var translation in translations) {

    //check if all languages are here
    for (var lang of availableLanguages) {
        if (translations[translation][lang] === undefined) {
            throw new Error("Missing language '"+lang+"' for translation '"+translation+"'");
        }
    }

    console.log(translations[translation].format)
    result += "#!define STR_"+translation+" ["+availableLanguages.map(x => JSON.stringify(translations[translation][x]).replace(/##(\w+)##/g, '"$1"') + (translations[translation].format ? ".format("+translations[translation].format+")" : ""))+'][max(false, practiceRangeTranslations.index("{0}".format(Map.PRACTICE_RANGE)))]\n';
}

result