let setWatermark = (strOne, strTwo) => {
    let id = '1.23452384164.123412415'

    let waterMarkOut = document.getElementById("waterMarkOut");
    waterMarkOut.style.position = 'relative'
    //页面布局 给 img 外层添加个div，id = waterMarkOut;
    if (waterMarkOut) {
        if (document.getElementById(id) !== null) {
            // document.body.removeChild(document.getElementById(id));
            document.getElementById(id).remove();
        }

        let canvas = document.createElement('canvas');
        // 设置canvas画布大小
        canvas.width = 170;
        canvas.height = 120;

        let cans = canvas.getContext('2d');
        //水印旋转角度
        cans.rotate(-20 * Math.PI / 180);
        cans.font = '15px';
        cans.fillStyle = '#666666';
        cans.textAlign = 'center';
        cans.textBase = 'Middle';
        cans.fillText(strOne, canvas.width / 2, canvas.height);
        cans.fillText(strTwo, canvas.height / 2, canvas.height + 22);

        let div = document.createElement('div');
        div.id = id;
        div.style.pointerEvents = 'none';
        div.style.top = '20px';
        div.style.left = '0px';
        div.style.position = 'absolute';
        div.style.zIndex = '100000';
        div.style.width = waterMarkOut.offsetWidth + 'px';
        div.style.height = waterMarkOut.offsetHeight + 'px';
        div.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat';
        waterMarkOut.appendChild(div)
        return id;
    } else {
        alert("添加err");
    }
}

// 添加水印方法
export const setWaterMark = (strOne, strTwo) => {
    let id = setWatermark(strOne, strTwo)
    if (document.getElementById(id) === null) {
        id = setWatermark(strOne, strTwo)
    }
}

// 移除水印方法
export const removeWatermark = () => {
    let id = '1.23452384164.123412415'
    if (document.getElementById(id) !== null) {
        document.body.removeChild(document.getElementById(id))
    }
}