// Google Apps Script for Wedding RSVP Form
// 
// SETUP INSTRUCTIONS:
// 1. Create a new Google Sheet for your RSVPs
// 2. Go to Extensions > Apps Script
// 3. Delete any code in the editor and paste this entire script
// 4. Click "Deploy" > "New deployment"
// 5. Choose "Web app" as the deployment type
// 6. Set "Execute as" to "Me"
// 7. Set "Who has access" to "Anyone"
// 8. Click "Deploy"
// 9. Copy the Web App URL and paste it in the wedding-website.html file
//    (replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' with your URL)
// 10. The first time you deploy, you'll need to authorize the script

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // If this is the first submission, create headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Időbélyeg',
        'Teljes Név',
        'További Vendégek',
        'E-mail',
        'Részt vesz',
        'Ételallergiák',
        'Sofőrszolgáltatás',
        'Egyéb',
        'Nyelv'
      ]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#6B8E6B');
      headerRange.setFontColor('#FFFFFF');
    }
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Append the new row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.additional_guests || '',
      data.email || '',
      data.attending || '',
      data.allergies || '',
      data.driver_service || '',
      data.message || '',
      data.language || 'hu'
    ]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 9);
    
    // Send confirmation email to the guest
    if (data.email) {
      const isHungarian = data.language === 'hu';
      
      const subject = isHungarian 
        ? 'Stella & Zsolti Esküvője - Visszajelzés Megerősítése'
        : 'Stella & Zsolti\'s Wedding - RSVP Confirmation';
      
      const greeting = isHungarian
        ? `Kedves ${data.name}!`
        : `Dear ${data.name},`;
      
      const thanks = isHungarian
        ? 'Köszönjük a visszajelzésedet!'
        : 'Thank you for your RSVP!';
      
      const confirmation = isHungarian
        ? 'Az alábbi adatokat rögzítettük:'
        : 'We have recorded the following information:';
      
      const nameLabel = isHungarian ? 'Név:' : 'Name:';
      const guestsLabel = isHungarian ? 'További vendégek:' : 'Additional guests:';
      const attendingLabel = isHungarian ? 'Részvétel:' : 'Attending:';
      const allergiesLabel = isHungarian ? 'Ételallergiák:' : 'Food allergies:';
      const driverLabel = isHungarian ? 'Sofőrszolgáltatás:' : 'Driver service:';
      const otherLabel = isHungarian ? 'Egyéb:' : 'Other:';
      
      const closing = isHungarian
        ? 'Alig várjuk, hogy együtt ünnepelhessünk veled!\n\nSzeretettel,\nStella & Zsolti'
        : 'We can\'t wait to celebrate with you!\n\nWith love,\nStella & Zsolti';
      
      const emailBody = `${greeting}\n\n${thanks}\n\n${confirmation}\n\n` +
                       `${nameLabel} ${data.name}\n` +
                       `${guestsLabel} ${data.additional_guests || '-'}\n` +
                       `${attendingLabel} ${data.attending}\n` +
                       `${allergiesLabel} ${data.allergies}\n` +
                       `${driverLabel} ${data.driver_service}\n` +
                       `${otherLabel} ${data.message || '-'}\n\n` +
                       `${closing}`;
      
      try {
        MailApp.sendEmail({
          to: data.email,
          subject: subject,
          body: emailBody
        });
      } catch (emailError) {
        Logger.log('Email sending error: ' + emailError.toString());
        // Continue even if email fails
      }
    }
    
    // Optional: Send notification email to the couple
    // Uncomment and modify the email below if you want email notifications
    /*
    MailApp.sendEmail({
      to: 'your-email@example.com',
      subject: 'Új esküvői visszajelzés: ' + data.name,
      body: 'Új visszajelzés érkezett!\n\n' +
            'Név: ' + data.name + '\n' +
            'További vendégek: ' + (data.additional_guests || '-') + '\n' +
            'E-mail: ' + data.email + '\n' +
            'Részt vesz: ' + data.attending + '\n' +
            'Allergiák: ' + data.allergies + '\n' +
            'Sofőrszolgáltatás: ' + data.driver_service + '\n' +
            'Egyéb: ' + (data.message || '-') + '\n' +
            'Nyelv: ' + data.language + '\n\n' +
            'Összes visszajelzés megtekintése: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
    });
    */
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'RSVP received'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - you can run this to test the script
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Teszt Felhasználó',
        additional_guests: 'Teszt János, Teszt Anna',
        email: 'test@example.com',
        attending: 'Igen',
        allergies: 'Glutén',
        driver_service: 'Igen',
        message: 'Nagyon izgatottak vagyunk!',
        language: 'hu'
      })
    }
  };
  
  doPost(testData);
  Logger.log('Test completed - check your spreadsheet and email');
}
