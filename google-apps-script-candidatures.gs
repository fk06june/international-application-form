/**
 * Web App Apps Script pour le formulaire de candidature internationale.
 *
 * 1. Ouvrir Extensions > Apps Script depuis la feuille Google Sheets.
 * 2. Coller ce code et enregistrer.
 * 3. Déployer comme application Web, exécuter en tant que vous-même,
 *    avec l’accès « Toute personne ».
 * 4. Copier l’URL /exec dans GOOGLE_SHEETS_ENDPOINT de index.html.
 */
const SHEET_NAME = 'Candidatures';
const HEADERS = [
  'submittedAt',
  'firstName',
  'lastName',
  'email',
  'phone',
  'country',
  'university',
  'degree',
  'motivation',
  'documentFileNames',
  'documentCount',
  'status'
];

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function doGet() {
  return ContentService.createTextOutput('International applications Sheets connected');
}

function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};
  const sheet = getSheet_();
  sheet.appendRow([
    params.submittedAt || new Date().toISOString(),
    params.firstName || '',
    params.lastName || '',
    params.email || '',
    params.phone || '',
    params.country || '',
    params.university || '',
    params.degree || '',
    params.motivation || '',
    params.documentFileNames || '',
    params.documentCount || '0',
    params.status || 'Nouvelle candidature'
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'Candidature enregistrée' }))
    .setMimeType(ContentService.MimeType.JSON);
}
