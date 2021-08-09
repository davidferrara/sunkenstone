# sunkenstone
This is a custom Google Apps Script I created for a google sheet.

<b>Setup:</b>
The sheet's main purpose is for tracking different data points.  Each sheet in the spreadsheet cooresponds to a month with an additional "Vendors" sheet.  Each column has a different use, but the important column for these scripts is the "Disposition" column.
The key points are to be able to quickly and easily create new sheets for data input and to automatically hide rows marked "Disposed" on the sheet.

<b>Active Functionality:</b>
The script runs the onOpen() function when the spreadsheet is opened.  This creates a custom menu in the tool bar titled "Custom Tools".  In the custom menu there are 4 options, "Create New Month Sheet", "Hide All Disposed", "Unhide All Disposed", and "To Uppercase".

Create New Month Script:
When this is clicked, the script opens up a Custom Modal Dialog that is created from the Form.html file.  All this does is allow you to select a month and year to create a new month sheet in the spreadsheet.  After submitting, it determines what month was selected, copies a hidden template sheet, renames that sheet with the month selected and then unhides the new sheet ready for use.

Hide All Disposed Script:
This function gets the "Disposition" column range and iterates through it. If "Dispoed" is found as the value in the cell, it will hide that row.

Unhide All Disposed Script:
This function does the opposite of the Hide All Disposed Script.  It once again gets the range for the "Disposition" column and iterates though it, this time just unhiding all the rows in the range.

To Uppercase:
This just takes whatever single range that is active on the sheet and sets all the characters to uppercase.

<b>Passive Functionality:</b>
AtEdit:  This function gets triggered whenever the onEdit() function is triggered.  When someone makes an edit to the sheet, it checks to see if the column that was edited was the "Disposition" column.  If not, it checks to see if column 2, 3, 4, or 5 were edited instead to uppercase any edits in those columns.  If column 11 was edited, then it checks to see if it was edited to say "Disposed".  If it was, then that row is hidden on the sheet.
