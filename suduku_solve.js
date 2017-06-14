suduku_solve = function(list) {
    //定义
    var cells = Array(81),
        rows = Array(9), //行
        cols = Array(9), //列
        grids = Array(9); //网格

    for (var i = 0; i < 9; i++) {
        rows[i] = [];
        cols[i] = [];
        grids[i] = [];
    }
    //赋值
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            var grid = row - row % 3 + col / 3 << 0;
            var cell = cells[row * 9 + col] = {
                row: row,
                col: col,
                grid: grid,
                value: list[row][col]
                // value: +arguments[row].charAt(col)
            };
            rows[row].push(cell);
            cols[col].push(cell);
            grids[grid].push(cell);
        }
    }

    //将与当前项有联系的（同行row同列col同网格grid）放在当前项的groups当中
    cells.forEach(function(cell) {
        var arr = cell.groups = [cell];
        rows[cell.row].concat(cols[cell.col]).concat(grids[cell.grid]).forEach(function(obj) {
            if (arr.indexOf(obj) === -1) {
                arr.push(obj);
            }
        });
        arr.shift();
    });
    var results = [];
    var time = 0;

    console.log('----- start -----');
    solve(0);

    //解决第n个
    function solve(n) {
        if (results.length) {
            return
        }
        time++;
        // console.log(time)//打印次数
        // solved
        if (n === 81) {
            //返回cells中的cell.value
            var result = cells.map(function(cell) {
                return cell.value;
            });
            for (var i = result.length - 1; i >= 0; i--) {
                if (i % 9 == 0) result.splice(i, 0, '\n');
                result.splice(i, 0, ' ')
            }
            result = result.join("");
            console.log(result);
            results.push(result);
            return;
        }
        var cell = cells[n];
        if (cell.value) {
            solve(n + 1);
        } else {
            for (var i = 1; i <= 9; i++) {
                //当前groups中存在i
                var exist = cell.groups.some(function(obj) {
                    return obj.value === i;
                });
                if (exist) { //如果存在进入下一个for
                    continue;
                }
                cell.value = i;
                solve(n + 1);
            }
            cell.value = 0;
        }
    }
    console.log("found " + results.length + " results");
    console.log('------ end ------');
    return results;
};

var sudulist = [
    // [0,0,9,0,6,0,0,5,0],
    // [0,3,0,0,0,9,0,1,0],
    // [0,1,0,0,0,5,0,0,3],
    // [0,0,0,4,0,0,5,7,0],
    // [0,0,0,0,0,0,0,6,0],
    // [0,4,8,0,0,0,0,0,9],
    // [2,0,7,0,0,1,0,0,5],
    // [0,0,1,0,0,0,8,0,0],
    // [0,0,0,9,7,0,0,0,0]

    [0,6,0,0,9,3,0,0,0],
    [0,0,1,0,0,0,5,0,0],
    [0,3,0,4,0,0,0,9,0],
    [1,0,8,0,2,0,0,0,4],
    [0,0,0,3,0,9,0,0,1],
    [2,0,0,0,1,0,6,0,9],
    [0,8,0,0,0,6,0,2,0],
    [0,0,4,0,0,0,8,0,7],
    [0,0,0,7,0,5,0,1,0]
]
suduku_solve(sudulist);
