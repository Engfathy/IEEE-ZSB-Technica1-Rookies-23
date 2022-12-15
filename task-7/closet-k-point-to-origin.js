let kClosest = function (pts, k) {
    let n = pts.length;
    let distance = new Array(n);
    for (let i = 0; i < n; i++) {
        let x = pts[i][0], y = pts[i][1];
        distance[i] = (x * x) + (y * y);
    }
    distance.sort(function (a, b) { return a - b; });
    let distk = new Array(k);
    for (let j = 0; j < k; j++) {
        distk[j] = distance[j];
    }
    let result = new Array(k);
    let count = 0;
    for (let i = 0; i < n; i++) {
        let x = pts[i][0], y = pts[i][1];
        let dist = (x * x) + (y * y);
        for (let j = 0; j < k; j++) {
            if (dist == distk[j]) {
                if (count < k) {
                    result[count] = pts[i];
                    count++;
                }
                break;
            }
        }
    }
    return result;
};