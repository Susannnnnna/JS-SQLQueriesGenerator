function generateSQL() {
    // Get variables from form
    var operation = document.getElementById("operation").value;
    var tableName = document.getElementById("tableName").value;
    var columnNames = document.getElementById("columnNames").value.split(",").map(name => name.trim());
    var dataValues = document.getElementById("dataValues").value.split(";");
    var primaryKey = document.getElementById("primaryKey").value;
    var primaryKeyValue = document.getElementById("primaryKeyValue").value.split(";").map(id => id.trim());
    var sqlQuery = "";
    let setClause = "";

    // Depending on the case, separate and transform the data get from the form 
    switch (operation) {
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
                sqlQuery += `UPDATE ${tableName} SET ${setClause} WHERE ${primaryKey} = '${primaryKeyValue[index]}';\n`;
            });
            break;
        case "delete":
            sqlQuery = `DELETE FROM ${tableName} WHERE ${primaryKey} IN (${primaryKeyValue})`;
            break;
    }

    // Send prepared data
    document.getElementById("result").innerText = sqlQuery;
}