const workshopSettings = obj.settings

result = ""

const settingData = {
    Type: 'Type',
    Category: 'Category',
    Name: 'Name',
    DefaultValue: 'Default',
    SortOrder: 'Sort_Order'
}

for (var setting in workshopSettings) {
    const type = workshopSettings[setting][settingData.Type]
    const category = `'${workshopSettings[setting][settingData.Category]}'`
    const name = `'${workshopSettings[setting][settingData.Name]}'`
    const defaultValue = workshopSettings[setting][settingData.DefaultValue]
    const sortOrder = workshopSettings[setting][settingData.SortOrder]

    result += 'globalvar WSS_' + setting + ' = ' + `createWorkshopSetting(${type}, ${category}, ${name}, ${defaultValue}, ${sortOrder})` + '\n'
}

result