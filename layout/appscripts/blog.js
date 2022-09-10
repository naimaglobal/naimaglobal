const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1qfQQXQmZkj4Uk2d-vc_vwXxEmTlFzIiTz7jK2Q1UpZg/edit#gid=0")

function doGet(e) {
    var sheet = sheets.getSheetByName("Selected_Blog");
    let obj = {}
    let data = sheet.getDataRange().getValues();
    obj.content = data;

    return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}