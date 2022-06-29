const CACHEKEY = "calculation_history";

const checkStorage = function () {
  return typeof Storage !== "undefined";
};

const putHistory = function (data) {
  if (checkStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHEKEY) === null) {
      historyData = [];
    } else {
      historyData = JSON.parse(localStorage.getItem(CACHEKEY));
    }

    historyData.unshift(data);

    if (historyData.length > 5) {
      historyData.pop();
    }

    localStorage.setItem(CACHEKEY, JSON.stringify(historyData));
  }
};

const showHistory = function () {
  if (checkStorage()) {
    return JSON.parse(localStorage.getItem(CACHEKEY)) || [];
  } else {
    return [];
  }
};

const renderHistory = function () {
  const historyData = showHistory();
  let historyList = document.querySelector("#history-list");

  historyList.innerHTML = "";

  historyData.forEach((history) => {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + history.firstNumber + "</td>";
    row.innerHTML += "<td>" + history.operator + "</td>";
    row.innerHTML += "<td>" + history.secondNumber + "</td>";
    row.innerHTML += "<td>" + history.result + "</td>";

    historyList.appendChild(row);
  });
};

renderHistory();
