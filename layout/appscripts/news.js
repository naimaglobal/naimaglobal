const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11um5UejuOBJy7H_lIyYiRYiwlPPBUKf6adXj6ibFWpc/edit#gid=0")


function doGet(e) {
    var sheet = sheets.getSheetByName("Selected_News");
    let obj = {}
    let data = sheet.getDataRange().getValues();
    obj.content = data;

    return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
