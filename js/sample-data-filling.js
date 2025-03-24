function fillFormWithSampleDataSingleRow() {
    document.getElementById("tableName").value = "TableExampleName";
    document.getElementById("columnName").value = "ColumnName1,ColumnName2";
    document.getElementById("dataValue").value = "Value1,Value2";
    document.getElementById("primaryKey").value = "exampleId";
    document.getElementById("primaryKeyValue").value = "1";
}


function fillFormWithSampleDataMultiRows() {
    document.getElementById("tableName").value = "TableExampleName";
    document.getElementById("columnName").value = "ColumnName1,ColumnName2";
    document.getElementById("dataValue").value = "Value1,Value2;\nValue5,Value6;\nValue9,Value10";
    document.getElementById("primaryKey").value = "exampleId";
    document.getElementById("primaryKeyValue").value = "1;\n2;\n3";
}
