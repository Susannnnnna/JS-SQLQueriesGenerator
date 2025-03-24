function generateSQL() {
    var selectedQueryType = document.getElementById("queryType").value;
    var tableName = document.getElementById("tableName").value;
    var columnNames = document.getElementById("columnName").value.split(",").map(name => name.trim());
    var dataValues = document.getElementById("dataValue").value.split(";");
    var primaryKeys = document.getElementById("primaryKey").value;
    var primaryKeyValues = document.getElementById("primaryKeyValue").value.split(";").map(id => id.trim());
    var sqlQuery = "";
    let setClause = "";

    switch (selectedQueryType) {
        case "insert":
            dataValues.forEach((row, index) => {
                const values = row.split(",").map(value => `'${value.trim()}'`).join(",");
                sqlQuery += `INSERT INTO ${tableName} (${columnNames}) VALUES (${values})${index < dataValues.length - 1 ? ',' : ';'}\n`;
            });
            break;
        case "update":
            dataValues.forEach((row, index) => {
                const values = row.split(",").map(value => value.trim());
                let setClause = columnNames.map((columnName, columnIndex) => `${columnName}='${values[columnIndex]}'`).join(",");
                sqlQuery += `UPDATE ${tableName} SET ${setClause} WHERE ${primaryKeys} = '${primaryKeyValues[index]}';\n`;
            });
            break;
        case "delete":
            sqlQuery = `DELETE FROM ${tableName} WHERE ${primaryKeys} IN (${primaryKeyValues})`;
            break;
    }

    document.getElementById("result").innerText = sqlQuery;
}
