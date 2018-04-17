/**
 * 矩阵和数组相关的工具
 */
const matrixToolKit = {
    makeRow(v = 0) {
        const array = new Array(9);
        array.fill(v);
        return array;
    },

    makeMatrix(v = 0) {
        return Array.from({ length: 9 },
            () => this.makeRow(v));
    },

    /**
     * Fisher-Yates 洗牌算法
     */
    shuffle(array) {
        const endIndex = array.length - 2;
        for (let i = 0; i < endIndex; i++) {
            const j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
};

/**
 * 宫坐标系工具
 */
const boxToolkit = {
    // Todo
}


// 工具集
module.exports = class ToolKit {
    
    /**
     * 矩阵和数据相关的工具
     */
    static get matrix() {
        return matrixToolKit;
    }

    /**
     * 宫坐标系相关的工具
     */
    static get box() {
        return boxToolkit;
    }
};


