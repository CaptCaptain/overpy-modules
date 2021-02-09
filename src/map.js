const availableMapData = obj.availableMapData
const availableMaps = obj.availableMaps

function getMaps(mapData) {
    let maps = []
    for (data in mapData) {
        maps.push(`Map.${data}`)
    }
    return maps
}

function getMapData(mapData, dataToSearch) {
    let dataList = []
    for (var data in mapData) {
        dataList.push(mapData[data][availableMapData[dataToSearch]])
    }
    return dataList
}

for (var data in availableMapData) {
    result += `globalvar MAP_${availableMapData[data]} = [${getMapData(availableMaps, data).join(', ')}][[${getMaps(availableMaps).join(', ')}].index(getCurrentMap())]\n`
}

result