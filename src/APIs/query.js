// Query 
import Database from "./database";

class Query extends Database {
    getAll() { // hàm này lấy tất cả dữ liệu trong bảng
        let sql = `SELECT * FROM ${this.table}`;
        return this.fetchAll(sql);
    };
    getRef(table, fkey) { // hàm này lấy tất cả dữ liệu trong bảng
        let sql = `SELECT * FROM ${this.table} a, ${table} b where a.${fkey} = b.${fkey}`;
        return this.fetchAll(sql);
    };
    getRefOderBy(table, fkey, sort, type) { // hàm này lấy tất cả dữ liệu trong bảng
        let sql = `SELECT * FROM ${this.table} a, ${table} b where a.${fkey} = b.${fkey} order by ${sort} ${type}`;
        return this.fetchAll(sql);
    };
    insert(...rest) {
        let sql = `INSERT into ${this.table} values(`
        rest.forEach(value => {
            sql += `${value},`
        })
        sql = sql.substr(0, sql.length - 1) + `)`
        this.none(sql)
    }
    deleteWhere(col,value){ // hàm này delete có 1 điều kiện và không trả về giá trị
        let sql = `DELETE FROM ${this.table} WHERE ${col} = '${value}'`;
        this.none(sql);
    };
    deleteDlWhere(col1, value1, col2, value2){ // hàm này delete có 1 điều kiện và không trả về giá trị
        let sql = `DELETE FROM ${this.table} WHERE ${col1} = ${value1} and ${col2} = ${value2}`;
        this.none(sql);
    };





    // 
    getWhere(col,value) { // hàm này lấy tất cả dữ liệu trong bảng có điều kiện
        let sql = `SELECT * FROM ${this.table} WHERE ${col} = ${value}`;
        return this.fetch(sql)
    };
    getLike(col,value) { // hàm like và có trả về giá trị
        let sql = `SELECT * FROM ${this.table} WHERE ${col} LIKE ${value}`;
        return this.fetch(sql)
    };
    getMin(col){ // hàm lấy MIN không có điều kiện có trả về giá trị
        let sql = `SELECT MIN(${col}) FROM ${this.table}`;
        return this.fetch(sql)
    }
    getMinWhere(colmin,col,value){ // hàm lấy MIN có 1 điều kiện có trả về giá trị
        let sql = `SELECT MIN(${colmin}) FROM ${this.table} WHERE ${col} = ${value}`;
        return this.fetch(sql)
    }
    getMax(col){ // hàm lấy MAX không có điều kiện có trả về giá trị
        let sql = `SELECT MAX(${col}) FROM ${this.table}`;
        return this.fetch(sql)
    }
    getMaxWhere(colmax,col,value){ // hàm lấy MAX có 1 điều kiện có trả về giá trị
        let sql = `SELECT MAX(${colmax}) FROM ${this.table} WHERE ${col} = ${value}`;
        return this.fetch(sql)
    }
    getCount(col){ // hàm COUNT không có điều kiện và trả về giá trị
        let sql = `SELECT COUNT(${col}),${col} FROM ${this.table} GROUP BY ${col}`;
        return this.fetchColumn(sql);
    }
    getCountWhere(colcount,col,value){ // hàm COUNT có 1 điều kiện và trả về giá trị
        let sql = `SELECT COUNT(${colcount}),${colcount} FROM ${this.table} WHERE ${col} = ${value} GROUP BY ${col}`;
        return this.fetchColumn(sql);
    }
    getOrderby(col,sort){ // hàm ORDER BY không có điện kiện và trả về giá trị
        let sql = `SELECT * FROM ${this.table} ORDER BY ${col} ${sort}`;
        return this.fetchAll(sql);
    }
    getOrderby(colorderby,sort, col, value){ // hàm ORDER BY có 1 điện kiện và trả về giá trị
        let sql = `SELECT * FROM ${this.table} WHERE ${col} = ${value} ORDER BY ${colorderby} ${sort}`;
        return this.fetchAll(sql);
    }
    update(col,value){ // hàm này update không có điều kiện và không trả về giá trị
        let sql = `UPDATE ${this.table} SET ${col} = ${value}`;
        this.none(sql);
    };
    updateWhere(col1,value1,col2,value2){ // hàm này update có 1 điều kiện và không trả về giá trị
        let sql = `UPDATE ${this.table} SET ${col1} = '${value1}' WHERE ${col2} = ${value2}`;
        this.none(sql);
    };
    updatesWhere(col1,value1,col2,value2,col3,value3){ // hàm này update có 1 điều kiện và không trả về giá trị
        let sql = `UPDATE ${this.table} SET ${col1} = '${value1}',${col2} = '${value2}' WHERE ${col3} = ${value3}`;
        this.none(sql);
    };
}

export default Query
