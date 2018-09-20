const multiDimensionalUnique = function(arr) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var str = arr[i];
    var shiftedItem = str.shift();
    var stringified = JSON.stringify(str)
      .replace(/\./g, "")
      .replace(/\#/g, "")
      .replace(/\$/g, "")
      .replace(/\//g, "")
      .replace(/\[/g, "")
      .replace(/\]/g, "");
    if (itemsFound[stringified]) {
      continue;
    }
    arr[i].unshift(shiftedItem);
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
};

const getIndexSpec1 = function(array, searchValue) {
  var temp = -1;
  array.map((item, index) => {
    if (item[0] == searchValue) {
      temp = index;
      return temp;
    }
  });
  return temp;
};
const getIndexSpec2 = function(array, searchValue) {
  var temp = -1;
  array.map((item, index) => {
    if (item[1] == searchValue) {
      temp = index;
    }
  });
  return temp;
};
const similarity = function(s1, s2) {
  if (!s1) {
    s1 = "";
  }
  if (!s2) {
    s2 = "";
  }
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  if (s1.trim() == s2.trim()) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
};

const editDistance = function(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
};

const JSONtoARR = function(data) {
  if (data) {
    if (Array.isArray(data)) {
      data = data.filter(function(item) {
        return item !== null;
      });

      return data;
    } else {
      var result = Object.keys(data).map(function(key) {
        return data[key];
      });
      result = result.filter(function(item) {
        return item !== null;
      });
      return result;
    }
  } else {
    return [];
  }
};

const replaceInvalid = function(item) {
  if (item) {
    return item
      .replace(/\./g, "")
      .replace(/\#/g, "")
      .replace(/\$/g, "")
      .replace(/\//g, "")
      .replace(/\[/g, "")
      .replace(/\]/g, "");
  }
};

const sortNUMHL = function(key) {
  return function(a, b) {
    var x = parseFloat(a[key]);
    var y = parseFloat(b[key]);
    if (isNaN(x)) {
      x = Infinity;
    }
    if (isNaN(y)) {
      y = Infinity;
    }
    return y - x;
    //      return (parseFloat(b[key])===null)-(parseFloat(a[key])===null) || -(parseFloat(b[key])>parseFloat(a[key])||+(parseFloat(b[key]))<parseFloat(a[key]));
  };
};

const uniq = function(a) {
  var prims = {
      boolean: {},
      number: {},
      string: {}
    },
    objs = [];

  return a.filter(function(item) {
    var type = typeof item;
    if (type in prims)
      return prims[type].hasOwnProperty(item)
        ? false
        : (prims[type][item] = true);
    else return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
};

function formatAMPM3(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function formatAMPM4(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  //    var ampm = hours >= 12 ? 'pm' : 'am';
  //    hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return strTime;
}

module.exports = {
  multiDimensionalUnique: multiDimensionalUnique,
  similarity: similarity,
  getIndexSpec1: getIndexSpec1,
  editDistance: editDistance,
  JSONtoARR: JSONtoARR,
  replaceInvalid: replaceInvalid,
  getIndexSpec2: getIndexSpec2,
  sortNUMHL: sortNUMHL,
  uniq: uniq,
  formatAMPM3: formatAMPM3,
  formatAMPM4: formatAMPM4
};
