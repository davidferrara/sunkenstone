function onOpen() {
  const ui = SpreadsheetApp.getUi()

  ui.createMenu('Custom Tools')
    .addItem('Create New Month Sheet', 'showDialog')
    .addSeparator()
    .addItem('Hide All Disposed', 'hideDisposed')
    .addItem('Unhide All Disposed', 'unhideDisposed')
    .addSeparator()
    .addItem('To Upper Case', 'capitalize')
  .addToUi()
}

function atEdit(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getActiveSheet()

  const col = e.range.getColumn()

  Logger.log('e.range.getColumn(): ' + e.range.getColumn())
  if(sheet.getSheetName() == 'Vendors sheet') {
    return
  } else if(col != 11) {
    if((col == 2)||(col == 3)||(col == 4)||(col == 5)) {
      let value = e.range.getValue().toString().trim().toUpperCase()
      e.range.setValue(value)
    }
    return
  }
  Logger.log('Column 11 DETECTED.')

  if(e.range.getValue() == 'Disposed') {
    Logger.log('Disposed DETECTED.')

    Logger.log(e.range.getRow())
    sheet.hideRows(e.range.getRow())
    let msg = 'Row ' + e.range.getRow() + ' has been hidden.'

    spreadsheet.toast(msg, 'Row Hidden')
  }
}

function hideDisposed() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getActiveSheet()

  if(sheet.getSheetName() == 'Vendors sheet') {
    return
  }

  const range = sheet.getRange(3, 11, sheet.getLastRow() - 2)
  Logger.log(range.getA1Notation())
  let values = range.getValues()
  Logger.log(values.length)

  let count = 0

  for(let i = values.length - 1; i >= 0; i--) {
    Logger.log('i: ' + i)
    Logger.log(values[i][0])
    if(values[i][0] == 'Disposed') {
      Logger.log('Dispoed DETECTED.')
      Logger.log('Hiding Row: ' + (i + 3))
      sheet.hideRows(i + 3)
      count++
    }
  }

  let msg = count + ' rows are hidden.'

  spreadsheet.toast(msg, 'Rows Hidden')
}

function unhideDisposed() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getActiveSheet()

  if(sheet.getSheetName() == 'Vendors sheet') {
    return
  }

  const range = sheet.getRange(3, 1, sheet.getLastRow() - 2)
  Logger.log(range.getA1Notation())

  sheet.unhideRow(range)

  let msg = 'All rows are unhidden.'

  spreadsheet.toast(msg, 'Rows unhidden')
}

function capitalize() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  Logger.log(sheet.getName())
  const range = sheet.getActiveRange()
  Logger.log(range.getA1Notation())

  let values = range.getValues()

  for(let i = 0; i < values.length; i++) {
    Logger.log('i' + i)
    Logger.log(values[i][0])
    values[i][0] = values[i][0].toString().trim().toUpperCase()
    Logger.log(values[i][0])
  }

  range.setValues(values)
}
