function getMostFrequentElement(element) {
    // 获取页面上的所有元素
    const elements = document.getElementsByTagName('*');

    // 创建一个对象来记录每个元素的出现次数
    const elementCount = {};

    // 遍历元素并统计出现次数
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const tagName = element.tagName.toLowerCase();

        if (elementCount[tagName]) {
            elementCount[tagName]++;
        } else {
            elementCount[tagName] = 1;
        }
    }

    // 找到出现次数最多的元素
    let maxCount = 0;
    let mostFrequentElement = '';

    for (const tagName in elementCount) {
        if (elementCount[tagName] > maxCount) {
            maxCount = elementCount[tagName];
            mostFrequentElement = tagName;
        }
    }

    console.log(`The most frequent element is <${mostFrequentElement}> with ${maxCount} occurrences.`);

}