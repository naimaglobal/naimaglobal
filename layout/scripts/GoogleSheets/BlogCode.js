const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ycrPoX_F2TueiixdGhscicRzIGe3ddyq5M2TGKAXiRA/edit#gid=246642902")

function doGet(e) {
    var sheet = sheets.getSheetByName("Selected_Blog");
    let obj = {}
    let data = sheet.getDataRange().getValues();
    obj.content = data;

    return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    var sheet = sheets.getSheetByName("Received_Blog");
    let data = e.parameter;

    sheet.appendRow([data.Blog_Name, data.Blog_Email, data.Blog_Blog, new Date()]);
    return ContentService.createTextOutput("Success");
}