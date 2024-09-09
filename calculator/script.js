// value：用於表單元素（如 <input> 和 <textarea>），表示這些元素的當前值。
// 對於計算器來說，我們需要讀取和更新 <input> 元素中的值，所以使用 value 是合適的。
// textContent：用於讀取或設置元素的文本內容，適用於大多數非表單元素（如 <div>、<span> 等）。
// 但它不適用於 <input> 元素，因為 <input> 元素沒有文本內容，只有值。

// 獲取顯示屏元素
const display = document.getElementById('display');

// 將值附加到顯示屏
function appendToDisplay(value) {
    display.value += value;
}

// 清除顯示屏
function clearDisplay() {
    display.value = '';
}

// 刪除顯示屏上的最後一個字符
function deleteLast() {
    //slice 方法用於提取字串的一部分：
    //起始位置（包含）：0，從第一個字符開始。
    //結束位置（不包含）：-1，從最後一個字符往前數一個位置。
    display.value = display.value.slice(0, -1);
}

// 計算並顯示結果
function calculateResult() {
    display.value = eval(display.value);
}