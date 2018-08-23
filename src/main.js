
const ROTATE_VALUE = {
    0: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 90], [0, 90], [90, 180], [-90, 90],
        [-90, 90], [-90, 90], [-90, 90], [-90, 90],
        [-90, 90], [-90, 90], [-90, 90], [-90, 90],
        [-90, 90], [-90, 0], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
    1: [
        [0, 90], [0, 180], [90, 180], [-225, 135],
        [-90, 0], [90, 180], [-90, 90], [-225, 135],
        [-225, 135], [-90, 90], [-90, 90], [-225, 135],
        [-225, 135], [-90, 90], [-90, 90], [-225, 135],
        [0, 90], [-90, 180], [-90, 0], [90, 180],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
    2: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 0], [0, 180], [90, 180], [-90, 90],
        [0, 90], [0, 180], [-90, 180], [-90, 90],
        [-90, 90], [0, 90], [0, 180], [-90, 180],
        [-90, 90], [-90, 0], [0, 180], [90, 180],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
    3: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 0], [0, 180], [90, 180], [-90, 90],
        [0, 90], [0, 180], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [90, 180], [-90, 90],
        [0, 90], [0, 180], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
    4: [
        [0, 90], [90, 180], [0, 90], [90, 180],
        [-90, 90], [-90, 90], [-90, 90], [-90, 90],
        [-90, 90], [-90, 0], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [90, 180], [-90, 90],
        [-225, 135], [-225, 135], [-90, 90], [-90, 90],
        [-225, 135], [-225, 135], [-90, 0], [-90, 180],
    ],
    5: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 90], [0, 90], [0, 180], [-90, 180],
        [-90, 90], [-90, 0], [0, 180], [90, 180],
        [-90, 0], [0, 180], [90, 180], [-90, 90],
        [0, 90], [0, 180], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
    6: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 90], [0, 90], [0, 180], [-90, 180],
        [-90, 90], [-90, 0], [0, 180], [90, 180],
        [-90, 90], [0, 90], [90, 180], [-90, 90],
        [-90, 90], [-90, 0], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
    7: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 0], [0, 180], [90, 180], [-90, 90],
        [-225, 135], [-225, 135], [-90, 90], [-90, 90],
        [-225, 135], [-225, 135], [-90, 90], [-90, 90],
        [-225, 135], [-225, 135], [-90, 90], [-90, 90],
        [-225, 135], [-225, 135], [-90, 0], [-90, 180],
    ],
    8: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 90], [0, 90], [90, 180], [-90, 90],
        [-90, 90], [-90, 0], [-90, 180], [-90, 90],
        [-90, 90], [0, 90], [90, 180], [-90, 90],
        [-90, 90], [-90, 0], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
    9: [
        [0, 90], [0, 180], [0, 180], [90, 180],
        [-90, 90], [0, 90], [90, 180], [-90, 90],
        [-90, 90], [-90, 0], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [90, 180], [-90, 90],
        [0, 90], [0, 180], [-90, 180], [-90, 90],
        [-90, 0], [0, 180], [0, 180], [-90, 180],
    ],
};

/**
 * 初始化
 */
window.onload = function() {
    initPureClock('myPureClockCon');
}

/**
 * 创建单个时钟元素结构
 */
function createSingleClockEle() {
    // 时针
    var hourEle = document.createElement('div');
    hourEle.classList.add('clock-cursor', 'hour');
    var hourContEle = document.createElement('div');
    hourContEle.classList.add('clock-cursor-cont');
    hourEle.appendChild(hourContEle);
    // 分针
    var minuteEle = document.createElement('div');
    minuteEle.classList.add('clock-cursor', 'minute');
    var minuteContEle = document.createElement('div');
    minuteContEle.classList.add('clock-cursor-cont');
    minuteEle.appendChild(minuteContEle);
    // 圆点
    var centerEle = document.createElement('div');
    centerEle.classList.add('clock-center');
    
    var clockEle = document.createElement('div');
    clockEle.classList.add('pure-clock');
    clockEle.appendChild(hourEle);
    clockEle.appendChild(minuteEle);
    clockEle.appendChild(centerEle);
    return clockEle;
}

/**
 * 初始化时钟
 * @param containerId - 容器元素id
 */
function initPureClock(containerId) {
    if(!containerId) {
        console.error('找不到指定的容器元素');
        return;
    }

    var clockWrapperEle1 = document.createElement('div');
    clockWrapperEle1.classList.add('pure-clock-wrapper');
    clockWrapperEle1.setAttribute('id', 'clockWrapper1');
    var clockWrapperEle2 = document.createElement('div');
    clockWrapperEle2.classList.add('pure-clock-wrapper');
    clockWrapperEle2.setAttribute('id', 'clockWrapper2');
    // 4*6为一组，可以显示数字0-9
    for(var i = 0; i < 24; i++) {
        clockWrapperEle1.appendChild(createSingleClockEle());
        clockWrapperEle2.appendChild(createSingleClockEle());
    }
    var conEle = document.getElementById(containerId);
    conEle.appendChild(clockWrapperEle1);
    conEle.appendChild(clockWrapperEle2);
    _startClock();

    /**
     * 启动时钟
     */
    function _startClock() {
        var curSecArr = getCurrentTimeSecArr();
        setClockGroupValue('clockWrapper1', curSecArr[0]);
        setClockGroupValue('clockWrapper2', curSecArr[1]);
        requestAnimationFrame(_startClock);
    }
}

/**
 * 获取当前时间的秒数的两位数组成
 */
function getCurrentTimeSecArr() {
    var curTime = new Date();
    var sec = curTime.getSeconds();
    return [Math.floor(sec / 10), sec % 10];
}

/**
 * 获取随机旋转角度
 * (每小时分无份)
 */
function getRandomRotate() {
    var factor = getRandomBetween(0, 60);
    return factor * 6;
}

/**
 * 在一个范围内获取随机数
 * @param {*} from 
 * @param {*} to 
 */
function getRandomBetween(from, to) {
    var range = to - from;
    var tarNum = from + Math.round(Math.random() * range);
    return tarNum;
}

/**
 * 设置时钟的时针、分针的旋转角度（基于默认位置旋转）
 * @param {*} selector 
 * @param {*} deg1 
 * @param {*} deg2 
 */
function setClockValue(clockEle, deg1, deg2) {
    var hourEle = clockEle.querySelector('.hour');
    var minuteEle = clockEle.querySelector('.minute');
    hourEle.style.transform = getRotateStyle(deg1);
    minuteEle.style.transform = getRotateStyle(deg2);
}

/**
 * 生成旋转样式
 * @param {*} val 
 */
function getRotateStyle(val) {
    return 'rotateZ(' + val + 'deg)';
}

/**
 * 设置组合时钟显示0-9之间的数字
 * @param {*} num 
 */
function setClockGroupValue(groupClockId, num) {
    var grVal = ROTATE_VALUE[num];
    if(!grVal) return;

    var crVal;
    var clockEles = document.querySelectorAll('#' + groupClockId + ' .pure-clock');
    for(var i = 0, len = clockEles.length; i < len; i++) {
        crVal = grVal[i];
        setClockValue(clockEles[i], crVal[0], crVal[1]);
    }
}
